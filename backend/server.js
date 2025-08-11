    const express=require('express')
    const mongoose=require('mongoose')
    const dotenv=require('dotenv')
    const userRoutes=require('./routes/userRoutes')
    const cors = require('cors');

    const app=express()
    
    const cookieParser = require('cookie-parser');


    dotenv.config();

 
    app.use(cookieParser());
        const allowedOrigins = [
  'http://localhost:5173',
  'https://education-friend-gvx2.vercel.app'  // your deployed frontend URL
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests like Postman
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
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