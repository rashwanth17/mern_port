import React from 'react'
import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone  } from 'lucide-react'
import { TabletSmartphone } from 'lucide-react';


const Footer = () => {
  return (
    <footer className='h-full w-full'>
        <div className='h-full w-full  flex justify-center items-center gap-12 bg-black'>
          <div><a href="mailto:rashwanth90474@gmail.com"><Mail className='text-white h-10 w-10 hover:text-red-600' /></a></div>
          <div><a href="https://www.linkedin.com/in/rashwanth-m-903115240/"><Linkedin className='text-white h-10 w-10 hover:text-blue-700'/></a></div>
          <div><a href="https://github.com/rashwanth17"><Github className='text-white h-10 w-10 '/></a></div>
          <div><a href="tel:+91000"><Phone className='text-white h-10 w-10 hover:text-green-600'/></a></div>
          {/* <div><a href="tel:+91000"><TabletSmartphone className='text-white h-10 w-10 hover:animate-spin'/></a></div> */}
          {/* <TabletSmartphone /> */}
        </div>
        </footer>
  )
}

export default Footer
