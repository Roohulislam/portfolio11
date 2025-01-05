import React from 'react';
import imag from "../assets/about.png";

const AboutMe = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-2 ">
      {/* Main Heading at the top */}
      <h1 className="text-xl font-semibold text-gray-800 font-serif text-center mb-4">
        About Me
      </h1>

      <div className="bg-gray-200 p-6 -mx-2 rounded-lg shadow-xl md:flex md:justify-between ">
        
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img 
            src={imag} 
            className="w-60 max-w-sm rounded-lg hover:scale-110 shadow-black" 
            alt="my photo" 
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-start md:pl-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-serif">
            Curious about me? Here you have it:
          </h2>
          <p className="text-gray-800 text-sm font-serif">
            Hi! I'm a web developer with a strong passion for creating dynamic and interactive websites.
            Over the years, I've gained extensive experience in various technologies. As a front-end developer, 
            I leverage powerful tools like ReactJS, Tailwind, Material-UI, and Bootstrap to build modern, 
            responsive, and visually appealing user interfaces. ReactJS is my go-to JavaScript library for 
            creating dynamic and high-performance single-page applications. Its component-based architecture 
            allows for efficient development and maintenance of complex UIs. For styling, I often use Tailwind 
            CSS, a utility-first framework that gives me the flexibility to build custom designs with minimal 
            overhead and maximum responsiveness. When looking for pre-designed, polished components, Material-UI 
            is my preferred choice, offering a rich set of React components following Google's Material Design principles. 
            Additionally, Bootstrap is a reliable framework that speeds up the development of responsive and mobile-first 
            websites, providing ready-to-use grid systems and UI components. Together, these tools enable me to create 
            seamless and efficient front-end experiences that are both functional and visually striking.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
