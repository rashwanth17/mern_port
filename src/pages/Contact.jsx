import { useEffect, useState } from "react"
// import Navbar from "../components/Navbar"
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
    <div className="bg-black h-full overflow-y-hidden">
      <div className="">
        <h1 className="flex justify-center text-7xl m-10 h-[45%] text-white">CONTACT ME</h1>
        <div className="flex justify-center text-1xl text-white">Feel free to reach out for collaborations, inquiries, or just to say hello. I'm always open to connecting!</div>
      </div>
      <div className='h-full w-full flex mt-20 gap-16  justify-center '>
        <div><a className="flex flex-col items-center justify-center hover:bg-red-900 rounded-md hover:shadow-2xl text-white shadow-white  h-[20%] w-[120%]" href="mailto:rashwanth90474@gmail.com"><Mail className='text-white h-14 w-14 hover:animate-spin' />rashwanth90474@gmail.com</a></div>
        <div><a className="flex flex-col items-center justify-center  hover:bg-blue-600 rounded-md hover:shadow-2xl text-white  h-[20%] w-[120%]" href="https://www.linkedin.com/in/rashwanth-m-903115240/"><Linkedin className='text-white h-14 w-14 hover:animate-spin' />Rashwanth Mahalingam</a></div>
        <div><a className="flex flex-col items-center justify-center group hover:bg-zinc-100 hover:text-black rounded-md hover:shadow-2xl text-white h-[20%] w-[120%] transition-all duration-300" href="https://github.com/rashwanth17"><Github className='text-white h-14 w-14 hover:animate-spin group-hover:text-black' />rashwanth/17</a></div>
        <div><a className="flex flex-col items-center justify-center  hover:bg-green-700 rounded-md hover:shadow-2xl text-white h-[20%] w-[120%] " href="tel:+91000"><Phone className='text-white h-14 w-14 hover:animate-spin' />PHN:+91 123456789</a></div>
      </div>
      </div>
    </>
  )
}

export default Contact