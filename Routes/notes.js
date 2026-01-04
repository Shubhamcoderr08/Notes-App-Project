import express from "express"
import mongoose from "mongoose"
import { Authenticate } from "../Middleware/auth.js"
import { createNotes } from "../Controllers/notes.js"
import {getNotes} from "../Controllers/notes.js"
import { updateNotes } from "../Controllers/notes.js"
import { deleteNotes } from "../Controllers/notes.js"
const router = express.Router()


// create notes 


router.post("/createNotes",Authenticate,createNotes)

// get notes

router.get("/getNotes",Authenticate,getNotes)

// update notes of the user

router.put("/updateNotes/:noteId",Authenticate,updateNotes)

// delete router of the user

router.delete("/deleteNotes/:noteId",Authenticate,deleteNotes)

export default router
