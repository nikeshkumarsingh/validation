const express= require("express");
const userControll= require("./controlls/user.controll")
const app= express();
app.use(express.json());
app.use("/user",userControll)
module.exports=app;