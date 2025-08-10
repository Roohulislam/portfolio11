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
  // Group skills by category
  const skillCategories = {
    "Frontend Technologies": [
      { img: img1, name: "HTML" },
      { img: img2, name: "CSS" },
      { img: img3, name: "JavaScript" },
      { img: img4, name: "Bootstrap" },
      { img: img5, name: "Material UI" },
      { img: img6, name: "Tailwind CSS" },
      { img: img7, name: "React" },
      { img: img14, name: "Redux" }
    ],
    "Backend & Database": [
      { img: img8, name: "MongoDB" },
      { img: img9, name: "Express" },
      { img: img10, name: "Node.js" },
      { img: img11, name: "SQL" }
    ],
    "Development Tools": [
      { img: img12, name: "Git" },
      { img: img13, name: "GitHub" },
      { img: img15, name: "Postman" }
    ]
  };

 return (
    <div className="bg-gray-100 mb-2 rounded-xl shadow-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="text-center mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          My Skills & Technologies
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
          Specializing in frontend development with React and modern web technologies
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
          Frontend-focused developer skilled in React.js, modern JavaScript, and UI design with Tailwind CSS and Material-UI, complemented by backend integration experience for full-stack collaboration
        </p>
      </div>

      {/* Skills by Category - keep the existing code */}
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-10 last:mb-0">
          <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
            {category}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-2 flex items-center justify-center">
                  <img 
                    src={skill.img} 
                    alt={skill.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;