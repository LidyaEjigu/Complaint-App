import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Staff from './Staff'

const Staffs = () => {
  const complaints= useSelector(state=>state.complaints)
  return (
    !complaints.length ?  <CircularProgress/>:
    <div className="exams">
      {
        complaints.map(complaint=>(
          <div key={complaint._id}>
            <Staff complaint={complaint}/>
          </div>
        ))
      }
    </div>
  
  )
}

export default Staffs