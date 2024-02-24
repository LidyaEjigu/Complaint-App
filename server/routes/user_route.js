import express from "express";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
const authRouter=express.Router()

authRouter.post('/signin',async(req,res)=>{
    try {
        const {email,password}=req.body
        const existingUser=await userModel.findOne({email})
        if (!existingUser) {
            return res.json({message:"User Doesn't Exist"})
        }
       
        const isPassword=await bcrypt.compare(password,existingUser.password)
        if (!isPassword) {
            return res.json({message:'invalid credintials'})
        }
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},'secret')
        res.json({result:existingUser,token})
    } catch (error) {
        console.log(error)
    }
})
authRouter.post('/signup',async(req,res)=>{
    try {
        const {email,password,confirmpassword,firstname,lastname,role}=req.body
        const existingUser=await userModel.findOne({email})
        if (existingUser) {
            return res.json({message:'User Already Exists.'})
        }
        if (password !== confirmpassword) {
            return res.json({message:"password doesn't match."})
        }
        const hashPassword=await bcrypt.hash(password,12)
        const result=await userModel.create({firstname,lastname,email,password:hashPassword,confirmpassword,role})
        const token= jwt.sign({email:result.email,id:result._id},'secret')
        res.json({result,token})
    } catch (error) {
        console.log(error)
    }
   
})
authRouter.get('/',async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await userModel.find()
        const token= jwt.sign({email:email},'secret')
        res.json({result:user,token})
    } catch (error) {
        console.log(error)
    }
})
export default authRouter