// import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'
import React from 'react'
// import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { IoLogoJavascript } from "react-icons/io5";
import { RiJavaLine } from "react-icons/ri";
import { SiFlutter } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";


const Profile = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className='h-full w-full bg-slate-90 flex  flex-col'>
      <div className='h-[80%] w-screen flex justify-center items-center'>
            <div className='h-screen w-screen flex flex-col justify-center ml-6'>
                <div className=' w-[80%] h-[10%] my-5 text-black text-3xl font-serif '>HELLO!! I'M <span className='font-semibold font-serif '>RASHWANTH</span></div>
                <div className='  w-[80%] h-[25%] text-1xl '>I’m a Computer Science student passionate about software engineering, specializing in Fullstack, Flutter and machine learning. I enjoy building practical, user-focused applications and have experience in Java and Python. My projects reflect innovation, data integration, and real-world impact.</div>
                <div className='flex  h-[7%] w-[80%] justify-between'>
                  <IoLogoJavascript className='text-yellow-300 h-full w-[20%]'  />
                  <RiJavaLine  className='text-blue-400 h-full w-[20%] '  />
                  <SiFlutter  className='text-blue-500 h-full w-[20%]'  />
                  <BiLogoFirebase   className='text-yellow-400 h-full w-[20%]'  />
                  <FaPython   className='text-yellow-300 h-full w-[20%]'  />
                  <SiMongodb  className='text-green-500 h-full w-[20%]'  />
                  </div>
            </div>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='h-[50%] w-[50%] border-2 border-black rounded-full'></div>
            </div>
      </div>
        <Footer/>
    </div> 
    </>
  )
}

export default Profile