import mongoose from "mongoose";
import {User} from "../Models/User.js"
import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
// register
export const register = async(req,res) =>{
const {username,email,password} = req.body


try {

    if(!username || !email ||!password){
        return res.status(400).json({message:"Required all Fields"})
    }
  let user = await User.findOne({email})

if(user){
return res.json({message:"User Already Exist, Please Login",success:false})
}  

const hashpassword = await bcrypt.hash(password,10)

 user = await User.create({username,email,password:hashpassword})
 res.status(201).json({message:"User Registered Succesfully",user,success:true})
 
} 

catch(error){
    res.status(500).json({message:"server error"})
}

}

//login

export  const login = async(req,res) =>{
  
  try {
    const {email,password} = req.body
    let user = await User.findOne({email})
  
  if(!email){
   return res.status(400).json({message:"user not found,Kindly register"})
  }

  const validpassword = await bcrypt.compare(password,user.password)
if(!validpassword){
    return res.status(401).json({message:"Invalid Credentials"})
}

const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,
   
   { expiresIn:"365d",
    
   }
)
res.status(200).json({message:"Login successfull",user,token,success:true})
  } 
  
  catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false
    });

  }

}