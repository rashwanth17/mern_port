import React from 'react';
import { TabletSmartphone } from 'lucide-react';
import Footer from '../Components/Footer';
import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone  } from 'lucide-react'

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
    title: 'HEART DISEASE PREDICT APP WITH ML',
    description: 'The heart disease prediction app, built using Flutter, leverages machine learning algorithms to analyze health metrics like age, cholesterol, and blood pressure, predicting the likelihood of heart disease. It offers real-time risk assessments with a user-friendly interface for seamless interaction and data visualization.',
  },
  {
    id: 5,
    title: 'BUS BOOKING SYSTEM',
    description: 'The bus ticket booking system, developed in Java, allows users to select routes, book seats, and generate booking details. It features basic functionalities for managing ticket reservations and cancellations. The program simplifies the booking process with a user-friendly command-line interface.',
  },
  {
    id: 6,
    title: 'TRAVEL APP WITH AI CHATBOX',
    description: 'The tour app, built using Flutter, integrates an AI chatbot powered by Dialogflow to provide personalized travel assistance. It allows users to explore destinations, get recommendations, and plan trips through conversational interactions. The app combines an intuitive interface with intelligent suggestions to enhance the user’s travel experience.',
  },
  // {
  //   id: 6,
  //   title: '',
  //   description: '',
  // },
  // {
  //   id: 6,
  //   title: '',
  //   description: '',
  // },
  // {
  //   id: 6,
  //   title: '',
  //   description: '',
  // },
];

const Project = () => {
  return (
    // <div className='flex flex-col overflow-y-scroll flex-wrap'>
    <div className='flex w-full h-[100%] overflow-y-auto flex-wrap '>
      <p className='text-5xl m-4 flex justify-center items-center w-full font-semibold'>MY PROJECTS</p>
      <div className='flex w-full h-[90%] mt-10  gap-5 flex-wrap justify-center items-center'>
      {projectData.map((project) => (
        <div
          key={project.id}
          className="service-card w-[300px] h-[350px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md"
        >
          <p className="font-bold text-2xl group-hover:text-white text-black/80 text-center flex gap-2">
            {/* <TabletSmartphone />  */}
            {project.title}
          </p>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>
      ))}
     <footer className='h-[25%] w-full flex justify-center mb-4 items-center '>
     <div className='h-full w-full  flex justify-center items-center gap-12 bg-black'>
       <div><a href="mailto:rashwanth90474@gmail.com"><Mail className='text-white h-10 w-10 hover:text-red-600' /></a></div>
       <div><a href="https://www.linkedin.com/in/rashwanth-m-903115240/"><Linkedin className='text-white h-10 w-10 hover:text-blue-700'/></a></div>
       <div><a href="https://github.com/rashwanth17"><Github className='text-white h-10 w-10 '/></a></div>
       <div><a href="tel:+91000"><Phone className='text-white h-10 w-10 hover:text-green-600'/></a></div>
       
     </div>
     </footer>
    </div>
    </div>
    // </div>
  );
};

export default Project;
