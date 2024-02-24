import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComplaints,updateComplaints } from '../../../actions/complaint'
import '../Complaint.css'
const Form = ({curID,setCurID}) => {
  const dispatch=useDispatch()
  const complaints=useSelector(state=>curID ? state.complaints.find(msg=>msg._id===curID):null)
  const complaintFile ={title:'',university:'',description:'',complain_to:'',postState:''}
  const [complaint,setComplaint]=useState(complaintFile)
  useEffect(()=>{
    if(complaints) return setComplaint(complaints)
  },[complaints])
  function onSubmit(e) {
     e.preventDefault()
     if (curID) {
        dispatch(updateComplaints(curID,{...complaint}))
     }
    else {
      dispatch(createComplaints(complaint))
    }
     Clear()
  }
  function  Clear() {
     setComplaint({title:'',university:'',description:'',complain_to:'',postState:''})
  }
  return (
    <>
    <div className=" fo-clear">
      <div className="titleC">Complaint Form</div>
    <form className='formC' onSubmit={onSubmit}>
      <div className="iputC">
        <input type="text" value={complaint.title} onChange={e=>setComplaint({...complaint,title:e.target.value})} placeholder='title'/>
        <input type="text" value={complaint.university} onChange={e=>setComplaint({...complaint,university:e.target.value})} placeholder='university'/>
        <input type="text" value={complaint.description} onChange={e=>setComplaint({...complaint,description:e.target.value})} placeholder='description'/>
        <input type="text" value={complaint.complain_to} onChange={e=>setComplaint({...complaint,complain_to:e.target.value})} placeholder='complain_to'/>
        <input type="text" value={complaint.postState} onChange={e=>setComplaint({...complaint,postState:e.target.value})} placeholder='status'/>
      </div>
      <button  className='submitC'>submit</button>
    </form>
    <button onClick={Clear} className='clearC'>x</button>
    </div>
    </>
  )
}


export default Form