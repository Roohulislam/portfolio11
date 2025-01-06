import React from "react";

const workExperience = [
  {
    role: "Frontend Developer",
    company: "Firnas.Tech",
    duration: "Nov 2024 - Present",
    responsibilities: [
      "Developed and maintained the front-end of web applications using React.js and Tailwind CSS.",
      "Collaborated with designers and backend developers to implement responsive UI/UX designs.",
      "Optimized components for maximum performance across various devices and browsers."
    ],
  },
  {
    role: "Intern Developer",
    company: "Software Technology Park",
    duration: "Sept 2024 - Dec 2024",
    responsibilities: [
      "Assisted in building and debugging web applications.",
      "Learned and applied agile development processes.",
      "Supported senior developers in front-end and back-end tasks."
    ],
  },
];

const Work = () => {
  return (
    <div className="p-8 bg-gray-200 mt-2 mx-6 rounded-2xl shadow-lg ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-3 ">
        Work Experience
      </h2>
      <div className="space-y-8">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <h3 className="text-xl font-bold font-serif text-gray-700 mb-2">
              {job.role} at {job.company}
            </h3>
            <p className="text-gray-500 font-serif mb-4">{job.duration}</p>
            <ul className="list-disc font-serif list-inside text-gray-600">
              {job.responsibilities.map((responsibility, i) => (
                <li className="font-serif" key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
