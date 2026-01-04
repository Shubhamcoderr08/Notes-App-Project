import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true
},

"title":{type:String,required:true},
"content":{type:String,required:true},
createdAt:{type:Date,default:Date.now}
})

export const Notes = mongoose.model("Notes",notesSchema)


