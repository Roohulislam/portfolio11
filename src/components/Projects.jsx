import React from "react";
import im1 from "../assets/projects/abu 2.png";
import im2 from "../assets/projects/faiz 1.png";
import im3 from "../assets/projects/zee 1.png";
import im4 from "../assets/projects/eccom 1.png";
import im5 from "../assets/projects/simongame.png";
import im6 from "../assets/projects/weather.png";

const projects = [
  {
    title: "Abunaveed oil Agency Ecomm",
    img: im1,
    liveDemo: "https://abunaveedoilagencychilas.com/",
    github: "https://github.com/Roohulislam/ourproject"
  },
  {
    title: "S/M Faiz construction",
    img: im2,
    liveDemo: "https://construction-lake.vercel.app/",
    github: "https://github.com/Roohulislam/construction-"
  },
  {
    title: "Zeejan.tech software company",
    img: im3,
    liveDemo: "https://zeejan.tech/",
    github: "https://github.com/Roohulislam/zeejan.tech"
  },
  {
    title: "Demo Ecommerce website",
    img: im4,
    liveDemo: "https://ecommerce-ivory-mu.vercel.app/",
    github: "https://github.com/Roohulislam/Ecommerce"
  },
  {
    title: "Simon Game",
    img: im5,
    liveDemo: "https://example-taskapp.com",
    github: "https://github.com/yourusername/abunaveed-lubricants"
  },
  {
    title: "Weather App",
    img: im6,
    liveDemo: "https://ecommerce-ivory-mu.vercel.app",
    github: "https://github.com/yourusername/ecommerce-shopsy"
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills and experience
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="h-48 sm:h-56 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {project.title}
              </h3>
              
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;