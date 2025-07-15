import React from 'react';
import BannImg from "../assets/projects/personal image.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='bg-gray-200 rounded-lg border shadow-xl max-w-7xl mx-auto mt-2 md:mt-4 p-4 md:p-6 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between'>
      {/* Image Section */}
      <div className='w-full flex justify-center lg:justify-end lg:w-auto mb-6 lg:mb-0'>
        <img 
          src={BannImg} 
          className='w-48 sm:w-56 md:w-64 rounded-full hover:scale-105 transition duration-300 shadow-lg border-4 border-blue-100' 
          alt="Profile" 
        />
      </div>
      
      {/* Content Section */}
      <div className='lg:w-2/3 xl:w-3/4'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 font-serif hover:text-blue-600 transition-colors duration-200 mb-2'>
          Hi, I'm Rooh-ul-Islam
        </h1>
        
        <p className='text-sm sm:text-base md:text-lg text-gray-700 font-serif mb-4 leading-relaxed'>
       As a Frontend Developer with expertise in building responsive, user-centric web applications using React.js, JavaScript (ES6+), and modern CSS frameworks. Skilled in crafting pixel-perfect UIs with HTML5, CSS3, Bootstrap, Material-UI, and Tailwind CSS. Passionate about creating efficient, scalable frontend architectures with seamless API integrations. Strong advocate for clean code, performance optimization, and intuitive user experiences.
        </p>
        
        <div className='flex items-center mb-4'>
          <IoLocationOutline className='text-gray-600 mr-2' />
          <span className='font-serif text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors duration-200'>
            Abbottabad, Pakistan
          </span>
        </div>
        
        <div className='flex items-center mb-6'>
          <span className='font-serif text-sm sm:text-base text-gray-700 italic'>
            Available for new projects
          </span>
        </div>
        
        {/* Social Icons */}
        <div className='flex justify-center md:justify-start gap-6 sm:gap-8'>
          <a 
            href="https://github.com/Roohulislam" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
            aria-label="GitHub"
          >
            <FaGithub size={26} className='hover:scale-110 transition-transform duration-200'/>
          </a>
          <a 
            href="https://www.linkedin.com/in/rooh-ul-islam-60a251300/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
            aria-label="LinkedIn"
          >
            <FaLinkedin size={26} className='hover:scale-110 transition-transform duration-200'/>
          </a>
          <a 
            href="mailto:your-email@example.com" 
            className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
            aria-label="Email"
          >
            <MdEmail size={26} className='hover:scale-110 transition-transform duration-200'/>
          </a>
          <a 
            href="https://wa.me/923488560875" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
            aria-label="WhatsApp"
          >
            <FaSquareWhatsapp size={26} className='hover:scale-110 transition-transform duration-200'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;