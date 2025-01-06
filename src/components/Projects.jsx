import React from "react";
import im1 from "../assets/wandrlust.png";
import im2 from "../assets/weather.png";
import im3 from "../assets/simongame.png";
import im4 from "../assets/todo.png";
import im5 from "../assets/abunaveed.png";
import im6 from "../assets/taskecom.png";

const projects = [
  {
    title: "E-commerce Airbnb clone",
    img: im1,
    description:
      "A fully responsive e-commerce platform with a modern UI and payment gateway integration.",
    liveDemo: "https://example-ecommerce.com",
  },
  {
    title: "Weather Website",
    img: im2,
    description: "A simple weather app using the html css and javascript and material ui",
    liveDemo: "https://example-portfolio.com",
  },
  {
    title: "Simon Game",
    img: im3,
    description:
      "A Simon Game is a memory-based game where players repeat a sequence of colors and sounds that progressively gets longer.",
    liveDemo: "https://example-taskapp.com",
  },
  {
    title: "Todo App",
    img: im4,
    description:
      "A To-Do App for efficiently managing tasks with features like adding, editing, and deleting items.",
    liveDemo: "https://example-taskapp.com",
  },
  {
    title: "Abunaveed oil's & lubricants",
    img: im5,
    description:
      "Abunaveed and brothers oils and lubricants web is full responsive",
    liveDemo: "https://example-taskapp.com",
  },
  {
    title: "E-commerce Shopsy",
    img: im6,
    description:
      "shopsy is full responsive and complete functionality to search some product etc.",
    liveDemo: "https://ecommerce-ivory-mu.vercel.app",
  },
  
];

const Projects = () => {
  return (
    <div className="p-8 bg-gray-200 mx-7 mt-3 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
       My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg relative shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              {project.title}
            </h3>
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-6">{project.description}</p>
            <div className="flex gap-4 bottom-1 absolute left-[32%]">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-500  text-white rounded-lg hover:bg-blue-600 transition"
              >
                Live Demo
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
