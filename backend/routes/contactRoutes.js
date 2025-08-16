const express=require('express')
const Contact = require('../models/contact')


const router=express.Router()



//POST
//create contact

router.post("/contact",async(req,res)=>{
    const {name,email,subject,message}=req.body
    try {
        const contact=await Contact.create({name,email,subject,message})
        res.status(200).json({message:"Message sent successfuly"},contact)


    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router