import mongoose from 'mongoose'

const subTodoSchema =new mongoose.Schema(
  {
    content:{
      type:String,
      required:true
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Types.ObjectId,
      ref:"User"
    }
  }
  ,{timpestamps:true})

export const SubTodo=mongoose.model("SubTodo",SubTodo)