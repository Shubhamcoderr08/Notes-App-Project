import mongoose from"mongoose"
import express from "express"
import bodyParser from "body-parser"
import userRouter from "./Routes/user.js"
import notesRouter from "./Routes/notes.js"
import { connectDB } from "./config/db.js"
import dotenv from 'dotenv'
dotenv.config();
connectDB()
const app = express()
app.use(bodyParser.json())



// user router

app.use("/api/user",userRouter)


// notes router 
app.use("/api/user",notesRouter)



// mongoose.connect(
//   "mongodb+srv://shubhamjha8324_db_user:pimLOyV6zlMIMQ5S@newcluster.slgusg2.mongodb.net/",
//   {
//     dbName:"Notes"
//   }

// )
// .then(()=>console.log("Mongodb Connected Succesfully"))
// .catch((err)=>console.log(err))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server is running on port ${process.env.PORT}`))


// console.log("welcome to the Notes app")





