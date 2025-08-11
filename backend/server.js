    const express=require('express')
    const mongoose=require('mongoose')
    const dotenv=require('dotenv')
    const userRoutes=require('./routes/userRoutes')
    const cors = require('cors');

    const app=express()
    
    const cookieParser = require('cookie-parser');


    dotenv.config();

 
    app.use(cookieParser());
        app.use(cors({
        origin: 'http://localhost:5173', // your frontend URL
        credentials: true               // allow cookies
        }));
    const connectDB=async ()=>{
        try{
            await mongoose.connect(process.env.MONGO_URI)
            console.log("Mongodb connected successfuly")
        }
        catch(err){
            console.log("mongodb connection failed",err)
        }


    }
    connectDB();


    app.use(express.json())
    const PORT=process.env.PORT
    app.get('/home',(req,res)=>{
        res.send("hello backend")
    })

    app.use("/api/users",userRoutes)

    app.listen(PORT,()=>{
        console.log("server is running");
    })