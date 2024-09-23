// import React from 'react'
// import { TabletSmartphone } from 'lucide-react';
// import Footer from '../Components/Footer'


// const Project = () => {
//   return (

//    <div className='flex w-full h-[300%] gap-20 m-5 p-3 justify-center flex-wrap'>
//     {/* <div></div> */}
// <div
//   className="service-card w-[300px] h-[20%] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-sm">

//   <p className="font-bold text-2xl group-hover:text-white text-black/80 text-center flex gap-2">
//   <TabletSmartphone /> JOURNAL APP
//   </p>
//   <p className="text-gray-400 text-sm">
//   The Flutter journal app includes an intuitive user interface designed for seamless navigation, allowing users to easily track their emotions and reflections over time. Future enhancements aim to incorporate data visualization and analytics to provide insights into mood trends and journaling habits.
//   </p>
  
// </div>

// <div
//   className="service-card w-[300px] h-[20%] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-sm">

//   <p className="font-bold text-2xl group-hover:text-white text-black/80 text-center flex gap-2">
//   <TabletSmartphone /> NOTES APP 
//   </p>
//   <p className="text-gray-400 text-sm">
//   Developed a notes app using Flutter integrated with Firebase, allowing users to create, edit, and delete notes with real-time data synchronization. The app ensures secure data storage and accessibility across devices. Its clean, user-friendly interface enhances the overall user experience.
//   </p>
  
// </div>

// <div
//   className="service-card w-[300px] h-[20%] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-sm">

//   <p className="font-bold text-2xl group-hover:text-white text-black/80 text-center flex gap-2">
//   <TabletSmartphone className=''/>EXPENSE TRACKER APP
//   </p>
//   <p className="text-gray-400 text-sm">
//   Developed an expense tracker app using Flutter, featuring a graph for monitoring spending habits and functionalities like budget categorization and transaction history. Its intuitive design promotes ease of use and financial awareness.
//   </p>
 
// </div>

      
    
//     </div>
   
//   )
// }

// export default Project





import React from 'react';
import { TabletSmartphone } from 'lucide-react';
import Footer from '../Components/Footer';

const projectData = [
  {
    id: 1,
    title: 'JOURNAL APP',
    description: 'The Flutter journal app includes an intuitive user interface designed for seamless navigation, allowing users to easily track their emotions and reflections over time. Future enhancements aim to incorporate data visualization and analytics to provide insights into mood trends and journaling habits.',
  },
  {
    id: 2,
    title: 'NOTES APP',
    description: 'Developed a notes app using Flutter integrated with Firebase, allowing users to create, edit, and delete notes with real-time data synchronization. The app ensures secure data storage and accessibility across devices. Its clean, user-friendly interface enhances the overall user experience.',
  },
  {
    id: 3,
    title: 'EXPENSE TRACKER APP',
    description: 'Developed an expense tracker app using Flutter, featuring a graph for monitoring spending habits and functionalities like budget categorization and transaction history. Its intuitive design promotes ease of use and financial awareness.',
  },
  {
    id: 4,
    title: 'EXPENSE TRACKER APP',
    description: 'Developed an expense tracker app using Flutter, featuring a graph for monitoring spending habits and functionalities like budget categorization and transaction history. Its intuitive design promotes ease of use and financial awareness.',
  },
  {
    id: 5,
    title: 'EXPENSE TRACKER APP',
    description: 'Developed an expense tracker app using Flutter, featuring a graph for monitoring spending habits and functionalities like budget categorization and transaction history. Its intuitive design promotes ease of use and financial awareness.',
  },
  {
    id: 5,
    title: 'EXPENSE TRACKER APP',
    description: 'Developed an expense tracker app using Flutter, featuring a graph for monitoring spending habits and functionalities like budget categorization and transaction history. Its intuitive design promotes ease of use and financial awareness.',
  },
  {
    id: 6,
    title: '',
    description: '',
  },
];

const Project = () => {
  return (
    // <div></div>,
    <div className='flex w-full h-full mt-12 pb-5 ml-20 gap-5 overflow-x-scroll flex-wrap'>
      {projectData.map((project) => (
        <div
          key={project.id}
          className="service-card w-[300px] h-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md"
        >
          <p className="font-bold text-2xl group-hover:text-white text-black/80 text-center flex gap-2">
            <TabletSmartphone /> {project.title}
          </p>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
