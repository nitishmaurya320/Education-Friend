const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        match:[/.+\@.+\.+/,"please enter valid email id"]
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("Contact",contactSchema)