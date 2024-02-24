import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAnnuncements } from '../../actions/complaint'
import Form from '../announcement/form/Form'
import Posts from '../announcement/posts/Posts'
import './comp-announcement.css'
const Announcement = () => {
   const dispatch =useDispatch()
   const [curID,setCurID]=useState(0)
useEffect(()=>{
       dispatch(fetchAnnuncements())
   },[dispatch])
  return (
     <>
     <div className="annou-form-post">
     <div className="poss">
          <Posts setCurID={setCurID}/>
        </div>
          <Form curID={curID} setCurID={setCurID}/>
     </div>
    
     </>
  )
}

export default Announcement