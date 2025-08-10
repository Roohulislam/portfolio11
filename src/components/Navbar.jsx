import React, { useState, useEffect } from 'react';
import logo from "../assets/photo.avif";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  // Robust CV Download Function
  const handleDownloadCV = async () => {
    try {
      // Using absolute path to ensure it works in all environments
      const cvUrl = `${window.location.origin}/rooh-cv.pdf`;
      
      // First verify the file exists
      const testResponse = await fetch(cvUrl, { method: 'HEAD' });
      if (!testResponse.ok) {
        throw new Error('CV file not found on server. Please check the filename and location.');
      }

      // If file exists, proceed with download
      const response = await fetch(cvUrl);
      if (!response.ok) {
        throw new Error(`Server returned ${response.status} error`);
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.href = downloadUrl;
      link.download = 'Rooh-ul-Islam-CV.pdf'; // Name of downloaded file
      link.style.display = 'none'; // Hide the link element
      document.body.appendChild(link);
      
      // Trigger download
      link.click();
      
      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(downloadUrl);
        document.body.removeChild(link);
      }, 100);
      
    } catch (error) {
      console.error('Download error:', error);
      alert(`Failed to download CV: ${error.message}\n\nPlease ensure:\n1. "rooh-cv.pdf" exists in the public folder\n2. The file is not corrupted\n3. Check browser console for details`);
    }
    
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='sticky top-0 z-50'>
      <nav className={`bg-gray-300 shadow-sm transition-all duration-300 ${scrolled ? 'py-0' : 'py-2'}`}>
        {/* Desktop View */}
        <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-12 rounded-full" alt="Logo" />
            <div className="ml-4">
              <h1 className="text-xl lg:text-2xl text-gray-600 font-bold font-serif">
                Rooh ul Islam
              </h1>
              <p className="text-sm lg:text-base text-gray-600 font-semibold font-serif">
                Web Developer
              </p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className='flex items-center gap-4 lg:gap-8'>
            <ul className="flex gap-4 lg:gap-8 font-serif text-gray-600 font-semibold">
              <li>
                <Link to="/" className="hover:text-gray-800 transition-colors duration-200 py-2 block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-800 transition-colors duration-200 py-2 block">About Me</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-gray-800 transition-colors duration-200 py-2 block">Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gray-800 transition-colors duration-200 py-2 block">Projects</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-gray-800 transition-colors duration-200 py-2 block">Work</Link>
              </li>
            </ul>
            <button 
              onClick={handleDownloadCV}
              className="px-4 py-2 text-sm lg:text-base bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
              aria-label="Download CV"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex items-center justify-between md:hidden px-4 h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="w-12 rounded-full" alt="Logo" />
            <div className="ml-3">
              <h1 className="text-lg text-gray-600 font-bold font-serif">
                Rooh ul Islam
              </h1>
              <p className="text-xs text-gray-600 font-semibold font-serif">
                Web Developer
              </p>
            </div>
          </Link>
          
          {/* Hamburger Menu Icon */}
          <button 
            onClick={handleMenu}
            className="p-2 text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {showMenu ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-gray-200 animate-fadeIn">
            <ul className="flex flex-col items-center py-4 space-y-3 font-serif">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-200 py-1 block"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-200 py-1 block"
                  onClick={closeMenu}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  to="/skills" 
                  className="text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-200 py-1 block"
                  onClick={closeMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-200 py-1 block"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/work" 
                  className="text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-200 py-1 block"
                  onClick={closeMenu}
                >
                  Work
                </Link>
              </li>
              <li className="pt-2">
                <button 
                  className="px-4 py-2 text-sm bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                  onClick={handleDownloadCV}
                  aria-label="Download CV"
                >
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;