import React from 'react'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Project from './pages/Project'
import WebLayout from './Layout/WebLayout'
import Footer from './Components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout/>}>
            <Route path="/" element={<Profile/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
            {/* <Route path='/about' element={<About/>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // <Footer/>
  )
}

export default App