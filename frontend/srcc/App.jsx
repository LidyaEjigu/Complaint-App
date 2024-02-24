import React from 'react'
import Complaint from './components/Home/Complaint'
import {Routes,BrowserRouter,Route,Navigate} from 'react-router-dom'
import Foods from './components/reports/Foods'
import Navbar from './components/navbar/Navbar'
import Announcement from './components/Home/Announcement'
import Home from './components/Home/Home'
import Exams from './components/reports/Exams'
import Staffs from './components/reports/Staffs'
import Genders from './components/reports/Genders'
import User from './components/UserProfile/User'
import ViewDescription from './components/announcement/ViewDescription'

const App = () => {

  return (
    <>
    <BrowserRouter >
    <Navbar/>
    <Routes>
    <Route path='/' Component={Home}/>
      <Route path='/complaint' Component={()=><Navigate to='/complaints'/>}/>
      <Route path='/complaints' Component={Complaint}/>
      <Route path='/Announcement' Component={Announcement}/>
    </Routes>
    <Routes>
      <Route path='/exam' Component={Exams}/>
      <Route path='/food' Component={Foods}/>
      <Route path='/staff' Component={Staffs}/>
      <Route path='/gender' Component={Genders}/>
      <Route path='/description/:id' Component={ViewDescription}/>
      <Route path='/profile' Component={User}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App