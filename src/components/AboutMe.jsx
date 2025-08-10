import React from 'react';
import imag from "../assets/projects/introimg.png";

const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2 py-2 md:py-2">
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-serif text-center mb-2 md:mb-2">
        About Me
      </h1>

      <div className="bg-gray-100 p-6 rounded-xl shadow-lg md:flex md:items-center md:gap-8 lg:gap-12 transition-all duration-500 hover:shadow-xl">
        {/* Image Section with Glow Effect */}
        <div className="w-full md:w-1/3 lg:w-2/5 flex justify-center mb-8 md:mb-0">
          <div className="relative group">
            <img 
              src={imag} 
              className="w-48 sm:w-56 md:w-64 lg:w-72 rounded-lg transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl filter group-hover:brightness-105" 
              alt="Profile photo"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                objectFit: 'cover',
                background: 'transparent'
              }}
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 lg:w-3/5">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 md:mb-4 font-serif transition-all duration-300 hover:text-blue-600">
            Software Engineer (Web)
          </h2>
          
          <p className="text-gray-700 text-sm sm:text-base font-serif leading-relaxed mb-4">
            With <span className="font-semibold">1.5+ years</span> of experience building high-performance, scalable web applications using React.js, Next.js, JavaScript, and Tailwind CSS. Adept at delivering responsive, user-focused interfaces and integrating seamlessly with backend APIs to create impactful digital products.
          </p>

          <div className="space-y-4">
            <div className="space-y-2 pl-4 border-l-4 border-blue-200">
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Building dynamic SPAs with React.js and modern JavaScript (ES6+)
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Creating responsive layouts using Tailwind CSS, Bootstrap, and Material-UI
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Implementing state management with Redux/Context API
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Optimizing web performance and cross-browser compatibility
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Developing server-side rendered applications with Next.js
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Integrating with RESTful APIs and WebSocket for real-time data
              </p>
            </div>

            <div className="pt-2">
              <p className="text-gray-700 text-sm sm:text-base font-serif italic">
                Excited to bring my frontend expertise to a remote volunteer role where I can help deliver engaging user experiences, uphold clean code standards, and make a meaningful impact through collaborative development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;