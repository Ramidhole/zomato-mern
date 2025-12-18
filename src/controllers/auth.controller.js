const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require ("jsonwebtoken");


async function registerUser(req,res) {
    const{fullName,email,password}= req.body;

    const isUserAlreadyExists = await userModel.findOne({email});

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"user is already exists"
        })   
    }
   
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        fullName,
        email,
        password:hashedPassword
    })


const token = jwt.sign({
    id:user._id,
},"3cb270d6c63a3467119d0ba01fa6e7cd")

res.cookie("token", token)

res.status(201).json({
    message:"user registered successfully",
    user:{
        _id : user._id,
        email:user.email,
        fullName:user.fullName
    }
})
}

module.exports={
    registerUser
}