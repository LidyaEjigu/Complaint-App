import axios from "axios"
const API=axios.create({baseURL:'http://localhost:7000'})
export const fetchComplaints=()=> API.get('/comp')
export const createComplaints=(complaint)=> API.post('/comp',complaint)
export const updateComplaints=(id,complaint)=> API.patch(`/comp/${id}`,complaint)
export const deleteComplaints=(id)=> API.delete(`/comp/${id}`)

export const fetchAnnuncements=()=> API.get('/announcement')
export const fetchAnnuncementsId=(id)=> API.get(`/announcement/${id}`)
export const createAnnuncements=(annuncement)=> API.post('/announcement',annuncement)
export const updateAnnuncements=(id,announcement)=> API.patch(`/announcement/${id}`,announcement)
export const deleteAnnuncements=(id)=> API.delete(`/announcement/${id}`)
