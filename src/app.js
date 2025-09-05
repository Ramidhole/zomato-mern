const express = require("express");
 const app = express();

 module.exports = app;


 app.get("/",(req,res)=>{
res.send("hi i am root ")
 });