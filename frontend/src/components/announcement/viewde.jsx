import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams } from 'react-router-dom'
import { fetchAnnuncementsId } from '../../actions/complaint'
const ViewDe = () => {

  const {announcement}=useSelector(state=>state.announcements)

  const {id} =useParams()
  const dispatch=useDispatch()
useEffect (()=>{
   dispatch(fetchAnnuncementsId(id))
},[dispatch,id]) 
  return (
   
<>
   <div className="viewco">
    <div className="vewD">
     <div className="titleD">{announcement?.title}</div>
      <div className="timeD">{announcement?.date}</div>
      <div className="descrip">{announcement?.body}</div> 
      <div className="statusV">status: Solved</div>
      <div className="author">Author: {announcement?.author}</div>
      <div className="tag">#Admin</div>
    </div>
   
    </div>
   </>
  )

}

export default ViewDe