import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'
import React from 'react'
import Navbar from '../Components/Navbar'

const Profile = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className='h-screen w-screen bg-slate-90 flex  flex-col'>

      <div className='h-[80%] w-screen flex justify-center items-center'>
            <div className='h-screen w-screen flex flex-col justify-center ml-6'>
                <div className=' w-[80%] h-[10%] my-5 text-black text-3xl font-serif '>HELLO!! I'M RASHWANTH</div>
                <div className='  w-[80%] h-[20%] text-1xl'>I’m a Computer Science student passionate about software engineering, specializing in Flutter and machine learning. I enjoy building practical, user-focused applications and have experience in Java and Python. My projects reflect innovation, data integration, and real-world impact.</div>
            </div>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='h-[40%] w-[40%] border-2 border-black rounded-full'></div>
            </div>
      </div>
        <div className='h-screen w-[40%]  flex justify-around items-center'>
          <div><Mail className='text-white h-10 w-10' /></div>
          <div><Linkedin className='text-white h-10 w-10'/></div>
          <div><Github className='text-white h-10 w-10'/></div>
          <div><Phone className='text-white h-10 w-10'/></div>
        </div>
    </div> 
    </>
  )
}

export default Profile