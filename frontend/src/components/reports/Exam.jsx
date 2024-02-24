import React from 'react'

const Exam = ({complaint}) => {
  const user=JSON.parse(localStorage.getItem('studentAuth'))

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
      <div className="complain_to">{complaint.complain_to}</div>
      {/* <div className="status">Solved</div> */}
      <div className="complaint_reporter">{complaint.complaint_reporter}</div>
    </div>
    </div>}
    </>
  )
}

export default Exam