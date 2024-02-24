import React, { useEffect, useState } from 'react'
import Form from '../complaint/form/Form'
import Posts from '../complaint/posts/Posts'
import './comp-announcement.css'
import { useDispatch } from 'react-redux'
import { fetchComplaints } from '../../actions/complaint'
const Complaint = () => {
  const [curID,setCurID]=useState(0)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchComplaints())
  },[dispatch])
  return (
      <>
      <div className="comp-form-post">
        <div className="postsCom">
          <Posts setCurID={setCurID}/>
        </div>
      <Form curID={curID} setCurID={setCurID}/>
      </div>
      </>
  )
}

export default Complaint