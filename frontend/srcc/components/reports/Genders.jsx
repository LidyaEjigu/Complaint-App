import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Gender from './Gender'

const Genders = () => {
  const complaints= useSelector(state=>state.complaints)
  return (
    !complaints.length ?  <CircularProgress/>:
    <div className="exams">
      {
        complaints.map(complaint=>(
          <div key={complaint._id}>
            <Gender complaint={complaint}/>
          </div>
        ))
      }
    </div>
  
  )
}

export default Genders