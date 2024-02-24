import express from 'express'
const router=express.Router()
import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
router.post('/signup',async(req,res)=>{
  try {
    const {email,password}=req.body
    const existingUser=await userModel.findOne({email})
    if (existingUser) {
      return res.json({message:'user already exists.'})
    }
    const hashPassword=await bcrypt.hash(password,12)
    const result=await userModel.create({email,password:hashPassword})
    const token=jwt.sign({email:result.email,id:result._id},'secret')
    res.json({result,token})
  } catch (error) {
    console.log(error)
  }
})
router.post('/signin',async(req,res)=>{
  try {
    const {email,password}=req.body
    const existingUser=await userModel.findOne({email})
    if (!existingUser) {
      return res.json({message:"user doesn't exist."})
    }
    const isPassword= await bcrypt.compare(password,existingUser.password)

    if(!isPassword)return res.json({message:"invalid credintials!"})
    
    const token= jwt.sign({email:existingUser.email,id:existingUser._id},'secret')
    res.json({result:existingUser,token})
  } catch (error) {
    console.log(error)
  }
})
export default router