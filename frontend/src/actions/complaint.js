import * as api from "../api/index.js";
import { FETCH_ALL,CREATE,UPDATE,DELETE, FETCHID } from "../constants/index.js";

export const fetchComplaint =()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchComplaint()
        dispatch({type:FETCH_ALL, payload:data})
        
    } catch (error) {
        console.log(error)
    }
}

export const createComplaint =(post)=>async(dispatch)=>{
    try {
        const {data} =await api.createComplaint(post)
        dispatch({type:CREATE, payload:data})
    } catch (error) {
       console.log(error) 
    }
}
export const updatedComplaint =(id,updatePost)=>async(dispatch)=>{
  try {
    const {data}=await api.updatedComplaint(id,updatePost)
    dispatch({type:UPDATE,payload:data})
    
  } catch (error) {
    console.log(error)
    
  }
}
export const deleteComplaint=(id)=>async(dispatch)=>{
 try {
    await api.deleteComplaint(id)
    dispatch({type:DELETE,payload:id})
    
 } catch (error) {
    console.log(error)
 }
}
//a
export const fetchAnnuncements =()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchAnnuncements()
        dispatch({type:FETCH_ALL, payload:data})
        
    } catch (error) {
        console.log(error)
    }
}
export const fetchAnnuncementsId=(id)=>async(dispatch)=>{
  try {
    const {data}=await api.fetchAnnuncementsId(id)
    console.log(data)
    dispatch({type:FETCHID,payload:data})
  } catch (error) {
    console.log(error)
  }
}
export const createAnnuncements =(post)=>async(dispatch)=>{
    try {
        const {data} =await api.createAnnuncements(post)
        dispatch({type:CREATE, payload:data})
    } catch (error) {
       console.log(error) 
    }
}
export const updateAnnuncements =(id,updatePost)=>async(dispatch)=>{
  try {
    const {data}=await api.updateAnnuncements(id,updatePost)
    dispatch({type:UPDATE,payload:data})
  } catch (error) {
    console.log(error)
    
  }
}
export const deleteAnnuncements=(id)=>async(dispatch)=>{
 try {
    await api.deleteAnnuncements(id)
    dispatch({type:DELETE,payload:id})
    
 } catch (error) {
    console.log(error)
 }
}