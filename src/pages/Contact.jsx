import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'

const Contact = () => {


  const [nulldata, setNullData] = useState(null)
  const [numberdata, setNumberData] = useState(0)
  const [stringdata, setStringData] = useState("a")
  const [booleandata, setBooleanData] = useState(true)
  const [arraydata, setArrayData] = useState([])
  const [objdata, setObjData] = useState({
    name: "",
    age: 0,
    isalive: false
  })


  if (!nulldata) {
    setNullData("Nulldata")
  }
  console.log(nulldata)
  //    
  const [visible, setvisible] = useState(false)
  return (
    <>
 
      <div className="h-full w-full flex justify-center items-center -z-10">
        
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

export default Contact