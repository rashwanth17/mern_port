import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'
import React from 'react'
import Navbar from '../Components/Navbar'

const Profile = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className='h-full w-full bg-slate-90 flex  flex-col'>

      <div className='h-[80%] w-screen flex justify-center items-center'>
            <div className='h-screen w-screen flex flex-col justify-center ml-6'>
                <div className=' w-[80%] h-[10%] my-5 text-black text-3xl font-serif '>HELLO!! I'M RASHWANTH</div>
                <div className='  w-[80%] h-[20%] text-1xl '>I’m a Computer Science student passionate about software engineering, specializing in Flutter and machine learning. I enjoy building practical, user-focused applications and have experience in Java and Python. My projects reflect innovation, data integration, and real-world impact.</div>
            </div>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='h-[50%] w-[50%] border-2 border-black rounded-full'></div>
            </div>
      </div>
        <div className='h-screen w-screen  flex justify-center items-center gap-7'>
          <div><a href="mailto:rashwanth90474@gmail.com"><Mail className='text-black h-10 w-10 hover:animate-spin' /></a></div>
          <div><a href="https://www.linkedin.com/in/rashwanth-m-903115240/"><Linkedin className='text-black h-10 w-10 hover:animate-spin'/></a></div>
          <div><a href="https://github.com/rashwanth17"><Github className='text-black h-10 w-10 hover:animate-spin'/></a></div>
          <div><a href="tel:+91000"><Phone className='text-black h-10 w-10 hover:animate-spin'/></a></div>
        </div>
    </div> 
    </>
  )
}

export default Profile