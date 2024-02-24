import React from 'react'
import Post from './post/Post'
import '../Announcement.css'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

const Posts = ({setCurID}) => {
  const announcements=useSelector(state=>state.announcements)
  return (
    !announcements.length ? <CircularProgress/>:
      (
        announcements.map((announcement,index)=>(
          <div key={index} className="postsA">
            <Post announcement={announcement} setCurID={setCurID}/>
          </div>
        ))
      )
  )
}

export default  Posts