import mongoose from 'mongoose'

const complaintSchema=new mongoose.Schema({
   title:String,
   university:{
    type: String,
    default:'Addis Ababa'
   },
   description: String,
   complain_to:{
    type:String,
    default:'admin'
   },
   firstname:String,
   lastname:String,
   complaint_reporter:String,
   postState:String,
})

const complaintModel=mongoose.model('complaintss',complaintSchema)
export default complaintModel