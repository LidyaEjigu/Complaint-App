import React, { useEffect, useState } from 'react'

import './comp-announcement.css'
import { useDispatch } from 'react-redux'
import Posts from '../complaint/posts/Posts'
import Form from '../complaint/form/Form'
import { fetchComplaint } from '../../actions/complaint'
const Complaint = () => {
  const [curID,setCurID] = useState(0);
  const dispatch =useDispatch()
  useEffect(() =>{
    dispatch(fetchComplaint())
    
  },[curID,dispatch])
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