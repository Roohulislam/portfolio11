import React from "react";

const workExperience = [
  {
    role: "Frontend Developer",
    company: "Firnas.Tech",
    duration: "November 2024 - Present",
    responsibilities: [
      "Developed and maintained the front-end of web applications using React.js and Tailwind CSS",
      "Collaborated with designers and backend developers to implement responsive UI/UX designs",
      "Optimized components for maximum performance across various devices and browsers",
      "Implemented state management solutions using Context API and Redux",
      "Conducted code reviews and mentored junior developers"
    ],
  },
  {
    role: "Intern Developer",
    company: "internship at Firnas.Tech",
    duration: "July 2024 - October 2024",
    responsibilities: [
      "Assisted in building and debugging web applications using modern JavaScript frameworks",
      "Learned and applied agile development processes in a team environment",
      "Supported senior developers in both front-end and back-end development tasks",
      "Participated in daily standups and sprint planning meetings",
      "Contributed to documentation and knowledge sharing within the team"
    ],
  },
];

const Work = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-1 py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Work Experience
        </h2>
        <p className="text-lg text-gray-600">
          My professional journey and contributions
        </p>
      </div>

      <div className="space-y-8">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {job.role} <span className="text-blue-600">@ {job.company}</span>
                </h3>
                <span className="text-gray-500 font-medium mt-1 sm:mt-0">
                  {job.duration}
                </span>
              </div>
              
              <ul className="space-y-3 pl-5">
                {job.responsibilities.map((responsibility, i) => (
                  <li 
                    key={i} 
                    className="text-gray-700 relative before:absolute before:left-[-1.25rem] before:top-[0.6rem] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;