import React from 'react'
import {useSelector} from 'react-redux'
const ViewDescription = ({announcement}) => {
  // const announcements=JSON.parse(localStorage.getItem('announcement'))
  const announcements=useSelector(state=>state.announcements)
  return (
   

    {announcements.map(announcement=><div className="viewco">
    <div className="vewD">
      <div className="titleD">{announcement.title}</div>
      <div className="timeD">{announcement.date}</div>
      <div className="descrip">
      {announcement.body}
      </div>
      <div className="statusV">status: Solved</div>
      <div className="author">Author: {announcement.author}</div>
      <div className="tag">#Admin</div>
    </div>
    </div>)}
   
  )
}

export default ViewDescription