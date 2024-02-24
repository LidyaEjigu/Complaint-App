import mongoose from 'mongoose'
const announcementSchema=new mongoose.Schema({
   title:String,
   body: String,
   author:{
    type:String,
    default:'Admin'
   },
   date:{
    type:Date,
    default:Date.now()
   },
   tag: [String],
   // Poststatus:String,
})

const announcementModel=mongoose.model('announcementms',announcementSchema)
export default announcementModel