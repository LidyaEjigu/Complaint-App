import express from 'express'
import { isAdmin, studentAuth } from '../middleware/studentAuth.js';
import announcementModel from "../models/announcement.js";
const announcementRouter=express.Router()


announcementRouter.post('/',studentAuth,isAdmin,async(req,res)=>{
    try {
        const announcement=req.body
        const newAnnouncement=new announcementModel(announcement)
        await newAnnouncement.save()
        res.json(newAnnouncement)
    } catch (error) {
        console.log(error)
    }
})
announcementRouter.get('/',studentAuth,async(req,res)=>{
    try {
        const announcement=await announcementModel.find()
        res.json(announcement)
    } catch (error) {
        console.log(error)
    }
})

announcementRouter.get('/:id',studentAuth,async(req,res)=>{
    try {
       const {id}=req.params
       const announcement=await announcementModel.findById(id)
       await announcement.save()
       res.json(announcement)
    } catch (error) {
       console.log(error)
    }
 })

announcementRouter.patch('/:id',studentAuth,isAdmin,async(req,res)=>{
    try {
        const {id}=req.params
        const announcement=req.body
        const updateAnnouncement= await announcementModel.findByIdAndUpdate(id,announcement,{new:true})
        if (!updateAnnouncement) {
           return res.json({message:'no announcement with this id'})
        }
       res.json(updateAnnouncement)
 
    } catch (error) {
        console.log(error)
    }
})
announcementRouter.delete('/:id',studentAuth,isAdmin,async(req,res)=>{
    try {
        const {id}=req.params
        const deleteAnnouncement= await announcementModel.findByIdAndDelete(id)
        if (deleteAnnouncement) {
            return res.json(deleteAnnouncement)
        }
        res.json({message:'no announcement with this id'})
    } catch (error) {
        console.log(error)
    }
})
export default announcementRouter