import React from 'react'

import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import UserLayout from './Layout/UserLayout'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

import Jobs from './Pages/Jobs'
import EducationalContent from './Pages/EducationalContent'
import VerifyEmail from './Pages/VerifyEmail'
import EmailVerificationSuccess from './Pages/EmailVerificationSuccess'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout/>}> 
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/educational-content" element={<EducationalContent/>} />
          <Route path="/verify-email" element={<VerifyEmail/>} />
          <Route path="/email-verification-success" element={<EmailVerificationSuccess/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          </Route>
          
        </Routes>
        </BrowserRouter>
      

      
    </div>
  )
}

export default App
