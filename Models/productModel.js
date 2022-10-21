const mongoose = require('mongoose');

const newProductSchema = new mongoose.Schema(
    {
color:{ type:[String],
        unique:true,
        ArrayName1:[ "Blue","Pink","Yellow","Red"]
    


},
   Size:{
    type:[String],
    unique:true,
    ArrayName2:["Small","Medium","Large"]
   },
   deletedAt: {
    type: Date,
    default : null
  }, 
isDeleted: {
    type: Boolean, 
    default: false
  },


}, { timestamps: true })


  


module.exports=mongoose.model("newUser", newProductSchema)
