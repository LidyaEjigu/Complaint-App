import * as api from '../api'

export const signinUser=(user,history)=>async(dispatch)=>{
     const users=JSON.parse(localStorage.getItem('studentAuth'))

     try {
        const {data}=await api.signinUser(user)
        dispatch({type:'AUTH',payload:data})
        if(!users.result.email) return alert("User Doesn't Exist")
        if (users.result.role==='admin') {
         return history('/announcement')
        }
       else{
         return history('/')
      }
     
     } catch (error) {
        console.log(error)
     }
}
export const signupUser=(user,history)=>async(dispatch)=>{
     try {
        const {data}=await api.signupUser(user)
        dispatch({type:'AUTH',payload:data})
       
        return history('/')
     } catch (error) {
        console.log(error)
     }
}
export const getUser=()=>async(dispatch)=>{
     try {
        const {data}=await api.getUser()
        console.log(data)
        dispatch({type:'FETCH_AUTH',payload:data})
     } catch (error) {
        console.log(error)
     }
}