import React from 'react';
import img1 from "../assets/html.png";
import img2 from "../assets/css.jpg";
import img3 from "../assets/javascript.png";
import img4 from "../assets/bootstrap-logo-shadow.png";
import img5 from "../assets/materail.png";
import img6 from "../assets/tailwind.png";
import img7 from "../assets/react.png";
import img8 from "../assets/mongodb.jpg";
import img9 from "../assets/express.png";
import img10 from "../assets/images.png";
import img11 from "../assets/sql.png";
import img12 from "../assets/gitbash.png";
import img13 from "../assets/github.jpg";
import img14 from "../assets/hopscotch.jpg";
import img15 from "../assets/postman.png";
import img16 from "../assets/node.png";

const Skills = () => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-xl mb-2 max-w-screen-xl mx-auto p-2 font-serif ">
      <h1 className="text-3xl font-semibold text-gray-800 font-serif text-center mb-4">
        Skills
      </h1>
      <p className="text-center text-gray-800 mb-6  font-serif">
        The skills, tools, and technologies I am really good at
      </p>
      
      {/* Flex container with responsiveness */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 shadow-xl gap-6">
        <div className="flex justify-center items-center mx-4">
          <img src={img1} className="w-32 h-32  object-contain hover:scale-110 transition duration-200 rounded-xl" alt="HTML" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img2} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="CSS" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img3} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="JavaScript" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img4} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Bootstrap" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img5} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Material UI" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img6} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img7} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img8} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img9} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img10} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img11} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img12} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img13} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img14} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img15} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img16} className="w-32 h-32 object-contain hover:scale-110 transition duration-200 rounded-xl" alt="Tailwind" />
        </div>

      </div>
    </div>
  );
};

export default Skills;
