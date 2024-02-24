import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchComplaint } from '../../actions/complaint'
import Posts from '../announcement/posts/Posts'
import Exam from './Exam'

const Exams = () => {
  const complaints= useSelector(state=>state.complaints)
  const [curID,setCurID] = useState(0);
  const dispatch =useDispatch()
  useEffect(() =>{
    dispatch(fetchComplaint())
    
  },[curID,dispatch])
  return (
    !complaints.length ?  <CircularProgress/>:
    <div className="exams">
      {
        complaints.map(complaint=>(
          <div key={complaint._id}>
            <Exam complaint={complaint}/>
          </div>
        ))
      }
       <Posts setCurID={setCurID}/>
    </div>
  
  )
}

export default Exams