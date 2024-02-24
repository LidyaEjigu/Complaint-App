import React, { useEffect, useState } from 'react'
import {Paper} from '@material-ui/core'
import{ Link, useLocation, useNavigate} from 'react-router-dom'
import './navbar.css'
import { useDispatch } from 'react-redux'
const Navbar = () => {
  const dispatch= useDispatch()
  const location=useLocation()
  const history=useNavigate()
  const[ user,setUser]=useState(JSON.parse(localStorage.getItem('studentAuth')))
  function logOut() {
    dispatch({type:'LOGOUT'})
     setUser(null)
     history('/')
  }
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('studentAuth')))
  },[location])
  return (
    <>
   
        <div >
         <Link to='/' className="logo">Student's Voice</Link>
        </div>
        <Paper>
        <div className="mm">
      { user?.result?.email &&
      <><div >
            <Link to='/complaint' className="li">Complaint</Link>
        </div>
        <div >
            <Link to='/Announcement' className="li aa">Announcement</Link>
        </div>
      </>
        }
        {user?.result?.email &&<div><div className="charA">{user?.result?.firstname?.charAt(0)}</div>
             <p className="firstAuth">{user?.result?.firstname} {user?.result?.lastname}</p></div>
        }
        <div >
        <div>{!user?.result ?
        <button className="auth">  
          <Link to='/auth' className="authL">SignUp Now</Link>
          </button>:
          <button className="authLog" onClick={logOut}>LOGOUT</button>}</div>
        </div>
        </div>
        </Paper>
    </>
  )
}

export default Navbar