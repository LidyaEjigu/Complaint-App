import express from 'express'
import todoModel from '../models/todoModel.js'
const router=express.Router()

router.post('/',async(req,res)=>{
    try {
        const todo=req.body
        const newTodo=new todoModel(todo)
        await newTodo.save()
        res.json(newTodo)
    } catch (error) {
        console.log(error)
    }
})
router.get('/',async(req,res)=>{
    try {
        const todo=await todoModel.find()
        res.json(todo)
    } catch (error) {
        console.log(error)
    }
})
router.get('/complete/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const todo=await todoModel.findById(id)
        todo.complete=!todo.complete
        await todo.save()
        res.json(todo)
    } catch (error) {
        console.log(error)
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const todo=await todoModel.findByIdAndRemove(id)
       
        res.json(todo)
    } catch (error) {
        console.log(error)
    }
})
export default router