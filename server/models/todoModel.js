import mongoose from "mongoose";
const todoSchema=new mongoose.Schema({
    text:{
        type:String
    },
    complete:{
        type:Boolean,
        default:false
    }
})
const todoModel=mongoose.model('Todo',todoSchema)
export default todoModel