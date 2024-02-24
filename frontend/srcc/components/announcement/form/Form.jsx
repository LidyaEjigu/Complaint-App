import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAnnuncements, updateAnnuncements } from '../../../actions/complaint'
import '../Announcement.css'
const Form = ({curID,setCurID}) => {
  const dispatch= useDispatch()
  const announcements=useSelector(state=>curID ? state.announcements.find(msg=>msg._id===curID):null) 
  const announcementFile ={title:'',body:'',tag:''}
  const [announcement,setAnnouncement]=useState(announcementFile)
    useEffect(()=>{
      if (announcements)   return setAnnouncement(announcements)
    },[announcements])
  
  function onSub(e) {
    e.preventDefault()
    if (curID) {
      dispatch(updateAnnuncements(curID,{...announcement}))
    }
    else {
      dispatch(createAnnuncements(announcement))
    }
     Clear()
  }
  function  Clear() {
     setAnnouncement({title:'',body:'',tag:''})
  }
  return (
    <>
    <div className=" fo-clear">
    <div className="titleA">Announcement Form</div>
    <form className='formA' onSubmit={onSub}>
      <div className="iputA">
        <input type="text" value={announcement.title} onChange={e=>setAnnouncement({...announcement,title:e.target.value})} placeholder='title'/>
        <input type="text" value={announcement.body} onChange={e=>setAnnouncement({...announcement,body:e.target.value})} placeholder='body'/>
        <input type="text" value={announcement.tag} onChange={e=>setAnnouncement({...announcement,tag:e.target.value})} placeholder='tag'/>
        {/* <input type="text" value={announcement.status} onChange={e=>setAnnouncement({...announcement,status:e.target.value})} placeholder='status'/> */}
      </div>
      <button  className='submit'>submit</button>
    </form>
    <button onClick={Clear} className='clear'>x</button>
    </div>
    </>
  )
}

export default Form