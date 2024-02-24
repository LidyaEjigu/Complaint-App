import { Delete, Edit } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteComplaint } from '../../../../actions/complaint'
// import { Link } from 'react-router-dom'
import '../../Complaint.css'
const Post = ({complaint,setCurID}) => {
  const dispatch= useDispatch()
  function DeleteComplaint() {
    dispatch(deleteComplaint(complaint._id))
  }
  return (
    <>
   <div className='post-co'>
   <div className="post">
    {complaint?.title ==='Exam Issue' && <div><img src="./assets/exam.jpg" alt="img" className='img'/></div>}
    {complaint?.title==='Food Issue' && <div><img src="./assets/food.jpg" alt="img" className='img'/></div>}
    {complaint?.title==='Staff Issue' && <div><img src="./assets/staff.jpg" alt="img" className='img'/></div>}
    {complaint?.title==='Gender Issue' && <div><img src="./assets/gender.jpg" alt="img" className='img'/></div>}
      {/* <div><img src="./c.jpg" alt="img" className='img'/></div> */}
      <div className="div">
        <h3>{complaint.title}</h3>
        <p>{complaint.firstname}</p>
        <p>{complaint.lastname}</p>
        <p>{complaint.description}</p>
        <p>{complaint.postState}</p>
        <p>{complaint.complain_to}</p>
        <p>{complaint.university }</p>
        <p>{complaint.firstname}&nbsp;&nbsp;&nbsp; {complaint.lastname}</p>
        {complaint?.title ==='Exam Issue' && <Link to='/exam'><button className='view'>View Report</button></Link>}
        {complaint?.title ==='Food Issue' && <Link to='/food'><button className='view'>View Report</button></Link>}
        {complaint?.title ==='Staff Issue' && <Link to='/staff'><button className='view'>View Report</button></Link>}
        {complaint?.title ==='Gender Issue' && <Link to='/gender'><button className='view'>View Report</button></Link>}
      </div>
      <div onClick={()=>setCurID(complaint._id)} className='edi'><Edit/></div>
      <div onClick={DeleteComplaint} className='del'><Delete/><p className='delete'>delete</p></div>

    </div>
   </div>
   {/* <div className='post-co'>
   <div className="post">
      <div><img src="./assets/exam.jpg" alt="img" className='img'/></div>
      <div className="div">
        <h3>Exam Issue</h3>
        <p> title ,university ,description, complain_to ,status , complaint_reporter </p>
        <Link to='/exam'><button className='view'>View Report</button></Link>
      </div>
    </div>
   </div>
   <div className='post-co'>
   <div className="post">
      <div><img src="./assets/gender.jpg" alt="img" className='img'/></div>
      <div className="div">
        <h3>Gender Issue</h3>
        <p> title ,university ,description, complain_to ,status , complaint_reporter </p>
        <Link to='/gender'><button className='view'>View Report</button></Link>
      </div>
    </div>
   </div>
   <div className='post-co'>
   <div className="post">
      <div><img src="./assets/staff.jpg" alt="img" className='img'/></div>
      <div className="div">
        <h3>Staff Issue</h3>
        <p> title ,university ,description, complain_to ,status , complaint_reporter </p>
        <Link to='/staff'><button className='view'>View Report</button></Link>
      </div>
    </div>
   </div> */}
   
    </>
  )
}

export default Post