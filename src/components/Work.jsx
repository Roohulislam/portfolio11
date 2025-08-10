import React from "react";

const workExperience = [
  {
    role: "Web Developer",
    company: "Firnas.tech",
    location: "Abbottabad, Pakistan",
    duration: "13/10/2024 – 04/08/2025",
    responsibilities: [
      "Led end-to-end development of a responsive client dashboard with React.js and Tailwind CSS, improving load time by 40% and boosting engagement by 25%",
      "Integrated dynamic RESTful APIs into a real-time analytics platform for 10,000+ users, cutting data latency by 50%",
      "Enhanced UI/UX, standardized components, and optimized performance, reducing development time by 35% and improving FCP from 3.2s to 1.5s"
    ],
  },
  {
    role: "Web Development Intern",
    company: "Firnas.tech",
    location: "Abbottabad, Pakistan",
    duration: "10/07/2024 – 10/10/2024",
    responsibilities: [
      "Developed and optimized React.js features, reducing UI bugs by 30% and enhancing cross-device user experience",
      "Integrated RESTful APIs for real-time functionality",
      "Collaborated in Agile teams and improved documentation to streamline onboarding and feature delivery"
    ],
  },
];

const Work = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-2 mb-2 lg:px-2 mt-1 py-2 bg-gray-100">
      <div className="text-center mb-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">
          Work Experience
        </h2>
      </div>

      <div className="space-y-8">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {job.company} – {job.location}
                </h3>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                <h4 className="text-lg sm:text-xl text-gray-700 font-medium">
                  {job.role}
                </h4>
                <span className="text-gray-500 font-medium mt-1 sm:mt-0">
                  [ {job.duration} ]
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