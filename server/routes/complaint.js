import express from 'express'
import complaintModel from "../models/complaint.js";
import { studentAuth } from '../middleware/studentAuth.js';
const router=express.Router()


router.post('/',studentAuth,async(req,res)=>{
    try {
        const complaint=req.body
        const newComplaint=new complaintModel({...complaint,complaint_reporter:req.userId})
        await newComplaint.save()
        res.json(newComplaint)
    } catch (error) {
        console.log(error)
    }
})
router.get('/',studentAuth,async(req,res)=>{
    try {
        const complaint=await complaintModel.find()
        res.json(complaint)
    } catch (error) {
        console.log(error)
    }
})
router.patch('/:id',studentAuth,async(req,res)=>{
    try {
        const {id}=req.params
        const complaint=req.body
        const updateComplaint= await complaintModel.findByIdAndUpdate(id,{...complaint},{new:true})
        if (!updateComplaint) {
           return res.json({message:'no complaint with this id'})

        }
         res.json(updateComplaint)

    } catch (error) {
        console.log(error)
    }
})
router.delete('/:id',studentAuth,async(req,res)=>{
    try {
        const {id}=req.params
        const deleteComplaint= await complaintModel.findByIdAndDelete(id)
        if (deleteComplaint) {
            return res.json(deleteComplaint)
        }
        res.json({message:'no complaint with this id'})
    } catch (error) {
        console.log(error)
    }
})
export default router