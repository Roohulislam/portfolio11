import React, { useState } from 'react';
import logo from "../assets/photo.avif";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='sticky top-0 '>
      <nav className="bg-gray-300 shadow-sm ">
        {/* Desktop View */}
        <div className="hidden md:flex max-w-screen justify-between items-center h-16 px-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} className="w-14 rounded-full" alt="Logo" />
            <div className="ml-4">
              <h1 className="text-2xl text-gray-600 font-bold font-serif hover:cursor-pointer">
                Rooh ul Islam
              </h1>
              <p className="text-gray-600 font-semibold font-serif hover:cursor-pointer">
                Web Developer
              </p>
            </div>
          </div>
          {/* Navigation Links */}
          <div className='flex justify-center items-center gap-3 md:gap-1'>
            <ul className="flex lg:gap-16 font-serif text-gray-600 md:gap-3 font-semibold pt-4">
              <li className="hover:cursor-pointer hover:text-gray-800">Home</li>
              <li className="hover:cursor-pointer hover:text-gray-800">About Me</li>
              <li className="hover:cursor-pointer hover:text-gray-800">Skills</li>
              <li className="hover:cursor-pointer hover:text-gray-800">Projects</li>
              <li className="hover:cursor-pointer hover:text-gray-800">Work</li>
            </ul>
            <button className="px-2 py-2 mt-2 ml-3 md:text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition">
              Download CV
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex items-center justify-between md:hidden px-4 h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} className="w-14 rounded-full" alt="Logo" />
            <div className="ml-4">
              <h1 className="text-2xl text-gray-600 font-bold font-serif hover:cursor-pointer">
                Rooh ul Islam
              </h1>
              <p className="text-gray-600 font-semibold font-serif hover:cursor-pointer">
                Web Developer
              </p>
            </div>
          </div>
          {/* Hamburger Menu Icon */}
          <LuMenu className="text-gray-600" onClick={handleMenu} size={38} />
        </div>
        {showMenu && (
          <ul className="flex flex-col items-center justify-center bg-gray-200 font-serif">
            <li className="hover:cursor-pointer hover:text-gray-800">Home</li>
            <li className="hover:cursor-pointer hover:text-gray-800">About Me</li>
            <li className="hover:cursor-pointer hover:text-gray-800">Work</li>
            <li className="hover:cursor-pointer hover:text-gray-800">Projects</li>
            <li className="hover:cursor-pointer hover:text-gray-800">Skills</li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
