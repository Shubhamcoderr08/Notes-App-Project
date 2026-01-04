import express from "express"
import mongoose from "mongoose"
import {User} from  "../Models/User.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

export const Authenticate = async(req,res,next)=>{
   try {
     const token = req.header("Auth")
    if(!token){
        return res.status(400).json({message:"Login first"})
    }
 
    const verifythetoken = jwt.verify(token,process.env.JWT_SECRET)

    let id = verifythetoken.userId
    const user = await User.findById(id)
   if(!user){
    res.status(400).json({message:"User Not Found",success:false})
   } 
  req.user = user
  next()
   } 
   
   
   catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false
    });

   }

}

