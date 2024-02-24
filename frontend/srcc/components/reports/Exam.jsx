import React from 'react'

const Exam = ({complaint}) => {
  return (
    <>
   {complaint.title ==='Exam Issue'  && 
    <div className="foodco">
    <div className="food">
      <div className="issue">{complaint.title}</div>
      <div className="foodescrip">
        {complaint.description}
      </div>
      <div className="place">{complaint.university}</div>
      <div className="complain_to">User</div>
      <div className="status">Solved</div>
      <div className="complaint_reporter">Me</div>
    </div>
    </div>}
    </>
  )
}

export default Exam