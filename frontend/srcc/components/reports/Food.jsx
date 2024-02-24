import React from 'react'
import './report.css'
const Food = ({complaint}) => {
  return (
    <>
   
   {complaint.title ==='Food Issue'  &&  <div className="foodco">
   <div className="food">
     <div><div className="issue">{complaint.title}</div>
      <div className="foodescrip">
        {complaint.description}
      </div>
      <div className="place">{complaint.university}</div>
      <div className="complain_to">User</div>
      <div className="status">Solved</div>
      <div className="complaint_reporter">Me</div>
      </div>
    </div>
    </div>}
    </>
  )
}

export default Food