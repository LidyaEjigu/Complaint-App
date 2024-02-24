import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    confirmpassword:String,
    role:{
        type:String,
        // default:'user'
    },
    username:String,
})
const userModel=mongoose.model("Userr",userSchema)
//
const adminData = {
    firstname: 'Yabsira',
    lastname:'Yetwale',
    username: 'Admin',
    role:'admin',
    email: 'yabsirayet@gmail.com',
    password: bcrypt.hashSync('1234', 6),
    confirmpassword:'1234'
  };
  
  userModel.findOneAndUpdate(
    { email: adminData.email },
    adminData,
    { upsert: true, new: true }
  )
    .then((updatedAdmin) => {
      // console.log('Admin saved/updated successfully:', updatedAdmin);
      // Perform other operations
    })
    .catch((error) => {
      console.error('An error occurred while saving/updating the admin:', error);
      // Handle the error appropriately
    });
export default userModel