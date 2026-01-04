import mongoose from "mongoose"
import {Notes} from "../Models/Notes.js"

// create Notes
export const createNotes = async(req,res)=>{
  let  {title,content} = req.body
  const userId = req.user
  let notes = await Notes.create({title,content,userId})
  res.status(201).json({message:"Notes created",notes,success:true})
}

// to get the notes of the user

export  const getNotes = async(req,res) =>{
  let userId = req.user
  // let notes = await Notes.find({userId:req.user})
  let notes = await Notes.find({userId}).sort({createdAt:-1})
  res.status(200).json({message:"Your Notes",yournotes:notes[0],success:true})
}

// to update the notes 

export const updateNotes = async(req,res) =>{
const {title,content} = req.body
let noteId = req.params.noteId
let userId = req.user

const note = await Notes.findOneAndUpdate(
   {_id:noteId,userId:userId},
   {title,content},
   {new:true},

)

if(!note){
  return res.status(400).json({message:"Note Not Found",success:false})
}

res.status(200).json({message:"Notes updated Succesfully",note,success:true})

}

// to delete a particuler notes 

export const deleteNotes = async (req,res)=>{
  let userId = req.user
  let noteId = req.params.noteId

  let note = await Notes.findOneAndDelete(
   {_id:noteId,userId:userId},
   {new:true},

  )

  if(!note){
   return res.status(400).json({message:"Notes not Found",success:false})
  }

  res.status(200).json({message:"Notes has been Deleted Successfully",note,sucess:true})
}



