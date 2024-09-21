import React from 'react'
import Footer from '../Components/Footer'


const Project = () => {
  return (

   <div className='flex w-full h-[300%] gap-20 m-5 p-3 justify-center flex-wrap'>
<div
  className="service-card w-[300px] h-[20%] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-sm">

  <p className="font-bold text-2xl group-hover:text-white text-black/80 text-center">
    JOURNAL APP
  </p>
  <p className="text-gray-400 text-sm">
  The Flutter journal app includes an intuitive user interface designed for seamless navigation, allowing users to easily track their emotions and reflections over time. Future enhancements aim to incorporate data visualization and analytics to provide insights into mood trends and journaling habits.
  </p>
  
</div>

<div
  className="service-card w-[300px] h-[20%] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-sm">

  <p className="font-bold text-2xl group-hover:text-white text-black/80 text-center">
    NOTES APP 
  </p>
  <p className="text-gray-400 text-sm">
  Developed a notes app using Flutter integrated with Firebase, allowing users to create, edit, and delete notes with real-time data synchronization. The app ensures secure data storage and accessibility across devices. Its clean, user-friendly interface enhances the overall user experience.
  </p>
  
</div>

<div
  className="service-card w-[300px] h-[20%] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-sm">

  <p className="font-bold text-2xl group-hover:text-white text-black/80 text-center">
    EXPENSE TRACKER APP
  </p>
  <p className="text-gray-400 text-sm">
  Developed an expense tracker app using Flutter, featuring a graph for monitoring spending habits and functionalities like budget categorization and transaction history. Its intuitive design promotes ease of use and financial awareness.
  </p>
 
</div>






{/* <Footer/> */}
      
    
    </div>,
   
  )
}

export default Project