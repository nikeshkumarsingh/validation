const express= require("express");
const {body,validationResult}=require("express-validator");
const User= require("../models/user.model.js");
const router= express.Router();

 router.post("/",
 body("firstName").not().isEmpty(),
body("lastName").not().isEmpty(),
body("pincode").isLength({min:6}),
body("email").isEmail().custom(async(value)=>{
    const user= await User.findOne({email:value});
    if(user){
        throw new Error("entered email is already exist");
    }
    return true;
}),body("age").isNumeric().custom((val)=>{
    if(val<1||val>100){
        throw new Error("age should be between 1 to 100")
    }
    return true;
}),body("gender").custom((val)=>{
    console.log(val)
    if(val!="Male"||val!="Female"||val!="female"||val!="male"||"others"){
        return true;
    }
    
    throw new Error("gender is incorrect")
})
,async(req,res)=>{
    try{
         const error = validationResult(req);
         if(!error.isEmpty()){
             return res.status(400).send({error:error.array()});

         }
         const user= await User.create(req.body);
         return res.status(201).send(user)
    }  
    catch(err){
        return res.status(500).send({message:err.message})
    }
});
module.exports=router;