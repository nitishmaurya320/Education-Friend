const mongoose=require('mongoose')

const donateSchema=new  mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
        email:{
        type:String,
        required:true,
        match:[/.+\@.+\..+/,"please enter a valid email address"]


    },
    amount:{
        type:String,
        required:true,

    },
    orderId:{
        type:String
    }
    
    
    

})

module.exports=mongoose.model("Donation",donateSchema)