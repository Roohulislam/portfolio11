import React from 'react';
import imag from "../assets/projects/introimg.png";

const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-serif text-center mb-8 md:mb-12">
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 md:mb-6 font-serif transition-all duration-300 hover:text-blue-600">
            A Dedicated Frontend Developer
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-sm sm:text-base font-serif leading-relaxed transition-all duration-300 hover:bg-gray-50 hover:px-2 hover:py-1 hover:rounded-lg">
              I transform ideas into interactive digital experiences with <span className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">2+ years</span> of hands-on React.js development. My passion lies in crafting pixel-perfect interfaces that users love.
            </p>

            <div className="space-y-2 pl-4 border-l-4 border-blue-200">
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Building  dynamic SPAs with React.js and modern JavaScript
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Creating responsive layouts using Tailwind CSS, Bootstrap, and Material-UI
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Implementing  state management with Redux/Context API
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Optimizing web performance and cross-browser compatibility
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Collaborating with designers to bring <span className="font-semibold">UI/UX concepts</span> to life
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-gray-800 mb-2">What drives me:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <p className="flex items-center text-sm sm:text-base">
                  <span className="text-blue-500 mr-2">🔹</span> Solving complex frontend challenges
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <span className="text-blue-500 mr-2">🔹</span> Staying ahead of web technologies
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <span className="text-blue-500 mr-2">🔹</span> Contributing to open-source
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <span className="text-blue-500 mr-2">🔹</span> Mentoring junior developers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;