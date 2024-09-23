import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const WebLayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-hidden'>
        <div className='h-[15%]'><Navbar/></div>
        <div className='h-[90%]'><Outlet/></div>
        {/* <div className='h-[10%]'><Footer/></div> */}
        
    </div>
  )
}


// git init
// git add .
// git commit -m ""
// git push




export default WebLayout