import * as api from '../api'
export const fetchComplaints=()=>async(dispatch)=>{
    const {data}=await api.fetchComplaints()
    dispatch({type:"FETCH",payload:data})
}
export const createComplaints=(complaint)=>async(dispatch)=>{
    const data=await api.createComplaints(complaint)
    dispatch({type:"CREATE",payload:data})
}
export const updateComplaints=(id,complaint)=>async(dispatch)=>{
    const data=await api.updateComplaints(id,complaint)
    dispatch({type:"UPDATE",payload:data})
}
export const deleteComplaints=(id)=>async(dispatch)=>{
   await api.deleteComplaints(id)
    dispatch({type:"DELETE",payload:id})
}

export const fetchAnnuncements=()=>async(dispatch)=>{
    const {data}=await api.fetchAnnuncements()
    console.log(data)
    dispatch({type:"FETCHA",payload:data})
}
export const fetchAnnuncementsId=(id)=>async(dispatch)=>{
    const {data}=await api.fetchAnnuncementsId(id)
    console.log(data)
    dispatch({type:"FETCHID",payload:data})
}
export const createAnnuncements=(annuncement)=>async(dispatch)=>{
    const data=await api.createAnnuncements(annuncement)
    console.log(data)
    dispatch({type:"CREATEA",payload:data})
}
export const updateAnnuncements=(id,annuncement)=>async(dispatch)=>{
    const data=await api.updateAnnuncements(id,annuncement)
    dispatch({type:"UPDATEA",payload:data})
}
  
export const deleteAnnuncements=(id)=>async(dispatch)=>{
    await api.deleteAnnuncements(id)
    dispatch({type:"DELETEA",payload:id})
}
  