import React from 'react'
import { useDispatch } from 'react-redux'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Announcement from './components/Home/Announcement'
import Complaint from './components/Home/Complaint'
import Auth from './components/auth/Auth'
import Navbar from './components/navbar/Navbar'
import Home  from './components/Home/Home'
import Exams from './components/reports/Exams'
import Foods from './components/reports/Foods'
import Staffs from './components/reports/Staffs'
import Genders from './components/reports/Genders'
import ViewDescription from './components/announcement/ViewDescription'

const App = () => {

  return (
   <>
  
     <BrowserRouter >
    <Navbar/>
    <Routes>
    <Route path='/' Component={Home}/>
      <Route path='/complaint' Component={Complaint}/>
      <Route path='/Announcement' Component={Announcement}/>
      <Route path='/exam' Component={Exams}/>
      <Route path='/food' Component={Foods}/>
      <Route path='/staff' Component={Staffs}/>
      <Route path='/gender' Component={Genders}/>
      <Route path='/announcement/:id' Component={ViewDescription}/>
      <Route path='/auth' Component={Auth}/>
    </Routes>
    </BrowserRouter>
    {/* <Routes>
    <Route path='/' Component={Home}/>
      <Route path='/complaint' Component={()=><Navigate to='/complaints'/>}/>
      <Route path='/complaints' Component={Complaint}/>
      <Route path='/Announcement' Component={()=><Navigate to='/Announcements'/>}/>
      <Route path='/Announcements' Component={Announcement}/>
    </Routes>
    <Routes>
   
      <Route path='/profile' Component={User}/>
      
    </Routes> */}

   </>
  )
}

export default App