import mongoose from 'mongoose'
const todoSchema=new mongoose.Schema(
  {
    content:{
      type:true,
      required:true,
      
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    subTodos:[
      {
        type:mongoose.schema.Types.ObjectId,
        ref:"subTodo"
      }
    ]  // Array of subtodos
  }
  ,{timestamps:true})

const Todo =mongoose.model("Todo",todoSchema)