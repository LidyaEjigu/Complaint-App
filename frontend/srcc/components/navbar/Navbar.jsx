import React from 'react'
import {Paper} from '@material-ui/core'
import{ Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <>
   
        <div >
         <Link to='/' className="logo">Student's Voice</Link>
        </div>
        <Paper>
        <div className="mm">
        <div >
            <Link to='/complaint' className="li">Complaint</Link>
        </div>
        <div >
            <Link to='/Announcement' className="li aa">Announcement</Link>
        </div>
        </div>
        </Paper>
    </>
  )
}

export default Navbar