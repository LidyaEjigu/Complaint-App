import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
//Auth
export const studentAuth=async(req,res,next)=>{
   try {
    const token=req.headers.authorization.split(" ")[1]
    let verified
    if (token){
    verified=jwt.verify(token,'secret')
    req.userId=verified?.id
    }
    next()
   } catch (error) {
     console.log(error)
   }
}
//Admin
export const isAdmin=async(req,res,next)=>{
  const token=req.headers.authorization.split(" ")[1]
  const verified=jwt.verify(token,'secret')
  const user=await userModel.findById(verified.id)
  if (user.role !== 'admin') {
     return res.status(401).json({message:'you are not an admin!'})
  }
  next()
}