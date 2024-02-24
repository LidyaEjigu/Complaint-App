import axios from "axios"
const API=axios.create({baseURL:'http://localhost:7000'})

API.interceptors.request.use(req=>{
    if (localStorage.getItem('studentAuth')) {
      req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('studentAuth')).token}`
    }
    return req
})


export const fetchAnnuncements=()=> API.get('/post')
export const fetchAnnuncementsId=(id)=> API.get(`/post/${id}`)
export const createAnnuncements=(annuncement)=> API.post('/post',annuncement)
export const updateAnnuncements=(id,post)=> API.patch(`/post/${id}`,post)
export const deleteAnnuncements=(id)=> API.delete(`/post/${id}`)


export const fetchComplaint=()=>API.get('/comp')
export const createComplaint =(newcomplaint)=>API.post('/comp',newcomplaint)
export const updatedComplaint =(id,complaint)=>API.patch(`/comp/${id}`,complaint)
export const deleteComplaint = (id) => API.delete(`/comp/${id}`);


export const signinUser=(user)=>API.post('/auth/signin',user)
export const signupUser=(user)=>API.post('/auth/signup',user)
export const getUser=()=>API.get('/auth')