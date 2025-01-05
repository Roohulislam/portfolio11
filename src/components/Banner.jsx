import React from 'react';
import BannImg from "../assets/a.png";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className=' bg-gray-200 rounded border shadow-2xl max-w-screen mt-1 md:flex md:flex-row-reverse md:justify-between' >
      <div className='w-full  md:flex md:justify-end flex justify-center  items-center m-1'>
        <img src={BannImg} className='w-60 rounded hover:scale-105 transition duration-300 shadow-gray-700 sm:w-52
        shadow-2xl mx-9' alt="jan image" />
      </div>
         <div className='h-full w-full m-3 pt-8'>
        <h1 className='font-bold text-2xl md:text-xl mx-3 sm:text-xl text-gray-800 font-serif cursor-pointer hover:text-blue-600'>Hi i'm Rooh-ul-islam</h1>
        <p className='font-sm font-serif mx-3 my-1 text-gray-800'> Experienced MERN Stack Developer with 1+ years of expertise in MongoDB, Express.js, Node.js, and React.js. Skilled in building full-stack web applications and creating efficient APIs. Strong problem solver with a passion for learning new technologies. 
            Adept at both front-end and backend development. Collaborative team player dedicated to project success</p>
             <div className='flex  mx-3 pt-4'>
                <IoLocationOutline className='flex mx-2'/>
                <h2 className=' font-serif text-sm text-gray-800 pb-1  hover:text-blue-600 cursor-pointer'>Abottabad, Pakistan</h2>
                </div>
                <div>
                <li className=' mx-6 font-serif text-sm text-gray-800 pb-6 hover:text-blue-600 cursor-pointer'>available for new projects</li>
                 <div className='flex justify-center  gap-7'>
                 <a href=" https://github.com/Roohulislam">
                    <FaGithub size={24} className='hover:scale-100 hover:text-blue-600'/>
                 </a>
                 <a href="https://www.linkedin.com/in/rooh-ul-islam-60a251300/">
                    <FaLinkedin size={24} className='hover:scale-100 hover:text-blue-600'/>
                 </a>
                 <a href="https://mail.google.com/mail/u/0/#inbox">
                    <MdEmail size={24} className='hover:scale-100 hover:text-blue-600'/>
                 </a>
                 <a href="tel:+923488560875">
                    <FaSquareWhatsapp size={24} className='hover:scale-100 hover:text-blue-600'/>
                 </a>

                 </div>
             </div>
      </div>
      
    </div>
  )
}

export default Banner