import MoreHoriz from '@material-ui/icons/MoreHoriz'
import {Delete,Edit} from '@material-ui/icons'
import React, { useState } from 'react'
import  { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../Announcement.css'
import { deleteAnnuncements } from '../../../../actions/complaint'

const Post = ({announcement,setCurID}) => {
  const dispatch=useDispatch()
  const [popup,setPopup]=useState(false)
  function POP() {
      setPopup(prev=>!prev)
  }
  function DeleteAnnouncement() {
     dispatch(deleteAnnuncements(announcement._id))
  }
  return (
    <>
    <div className="post-AAA">
    <div className="post-AA">
    <div className="postA">
      <div className="img-des">
      <img src="./assets/ring.jpg" alt="img" className='imgA' />
      <div className="title">
        <h1>{announcement.title}</h1>
        <p>   {announcement.body}</p>
        <Link to={`/description/${announcement._id}`}><button className='view'>View Description</button></Link>
      </div>
      </div>
      <button className='btn' onClick={POP}><MoreHoriz/></button>
      {
        popup &&  
        <div className="pop">
          <div onClick={DeleteAnnouncement}><Delete/></div>
          <div onClick={()=>setCurID(announcement._id)}><Edit/></div>
        </div>
      }
    </div>
    </div>
    </div>
    </>
  )
}

export default Post