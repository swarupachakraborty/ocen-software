const mongoose = require('mongoose');

const newUserSchema = new mongoose.Schema(
    {
name: {
    type:String,
    required:true,
    trim:true,
},
email: {
    type:String,
    required:true, 
    unique:true,
    trim:true,
},
phone: {
    type:String,
    required:true,
    unique:true, 
    trim:true,
    //valid Indian mobile number
}, 
},{ timestamps:true }

)

module.exports=mongoose.model("newUser", newUserSchema)
