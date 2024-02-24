import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComplaint, updatedComplaint } from '../../../actions/complaint'
import '../Complaint.css'
const Form = ({curID,setCurID}) => {
  const user=JSON.parse(localStorage.getItem('studentAuth'))
  const complaintFile ={title:'',university:'',description:'',complain_to:'',postState:''}
  const [complaint,setComplaint]=useState(complaintFile)
 
  const post = useSelector((state) => (curID ? state.complaints.find((message) => message._id === curID) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setComplaint(post);
  }, [post]);

  const Clear = () => {
     setCurID(0);
    setComplaint({title:'',university:'',description:'',complain_to:'',postState:''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (curID === 0) {
      dispatch(createComplaint({...complaint,firstname:user?.result?.firstname}));
      Clear();
    } else {
      dispatch(updatedComplaint(curID,{...complaint,lastname:user?.result?.lastname}));
      Clear();
    }
  };
  return (
    <>
    <div className=" fo-clear">
      <div className="titleC">Complaint Form</div>
    <form className='formC' onSubmit={handleSubmit}>
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