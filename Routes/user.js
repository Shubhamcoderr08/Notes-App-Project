import mongoose from "mongoose";
import express from "express"
import {register} from "../Controllers/user.js"
import {login}  from "../Controllers/user.js"

const router = express.Router()


// register 

router.post("/register",register)

// login

router.post("/login",login)

export default router