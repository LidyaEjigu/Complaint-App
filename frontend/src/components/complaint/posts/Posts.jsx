import React from 'react'
import Post from './post/Post'
import '../Complaint.css'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
const Posts = ({setCurID}) => {
  const complaints=useSelector(state=>state.complaints)

return (
 
 !complaints.length ? <CircularProgress/>:
  (
    complaints.map((complaint,index)=>(
    <div key={index} className="posts" >
      <Post complaint={complaint} setCurID={setCurID}/>
    </div>
   ))
  )
)
}


export default Posts