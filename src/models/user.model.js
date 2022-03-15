const mongoose = require("mongoose");
const mo0ngoose= require("mongoose");

const userSchema= new mongoose.Schema(
    {
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    pincode:{type:String,requird:true},
    },
    {
        timestamps:true,
    }

);
module.exports=mongoose.model("user",userSchema)
