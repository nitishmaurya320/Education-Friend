const express=require('express')
const User=require("../models/user")
const jwt = require('jsonwebtoken')
const {SendEmail}=require('../middleware/Email')
const {WelcomeEmail}=require('../middleware/Email')
const dotenv=require('dotenv')
dotenv.config()
const router=express.Router();

// register
router.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    try {
        let user=await User.findOne({email})

        if(user){
          return res.status(400).json({message:"User already exists"})
        }
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            
            user=new User({name,email,password,otp})
            await user.save();
           
            await SendEmail(user.email,user.otp)
            res.status(201).json({message:"User created successfully",user})
        
            
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
console.log(process.env.JWT_SECRET)

//verify email
router.post("/verify-email",async(req,res)=>{
    const {otp}=req.body
    try {
        let user=await User.findOne({otp})

    if(!user) return res.status(404).json({message:"Incorrect OTP"})
    
    
    user.isVerified=true;
    user.otp=null
    await user.save()
    res.status(200).json({message:"Email Verified Successfuly"})
    await WelcomeEmail(user.email)
    
    } catch (error) {
        console.log(error)
        res.status(200).json({message:error})
    }
    
    
})
// login
router.post("/login",async (req,res)=>{
    const {email,password}=req.body
    // console.log(req.body)
   try {
    const user=await User.findOne({email})
    
   if(!user){
    return res.status(404).json({message:"user not found"})
   }
   
    if(user&&!user.isVerified){
        return res.status(404).json({message:"User not registered"})
    }
   

    
    
    const isMatch=await user.matchPassword(password)
   
    if(!isMatch){
        return res.status(400).json({message:"Incorrect passowrd"})
    }
    const payload={user:{id:user._id,role:user.role}}
    jwt.sign(payload,
        process.env.JWT_SECRET,
        {expiresIn:"24h"},
        (err,token)=>{
            if(err) throw err;
            
            res.cookie("token", token, {
            httpOnly: true, 
            secure:true,
            sameSite: "None",
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({message:"Logged in Successfuly"})
        }
    )
    
    
    
   } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
   }
})
router.get("/check-auth", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ loggedIn: false });
    
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ loggedIn: true, user: decoded });
  } catch (err) {
    res.status(401).json({ loggedIn: false });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token",{
      httpOnly: true,
    secure: true,       // must match login cookie options
    sameSite: "None",   // must match login cookie options
    path: "/",  
  });
  res.json({ message: "Logged out" });
});


module.exports=router;