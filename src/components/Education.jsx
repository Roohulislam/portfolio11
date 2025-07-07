import React from "react";

const educationData = [
  {
    year: "2021 - 2025",
    degree: "Bachelor's in Computer Science",
    details: "Specialized in Software Engineering and Web Development"
  },
  {
    year: "2017 - 2018",
    degree: "FSC Pre-Engineering",
    details: "Major subjects: Mathematics, Physics, Chemistry"
  },
];

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 font-serif">
          Education
        </h2>
        <p className="text-lg text-gray-600">
          My Academic background and qualifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col"
          >
            <div className="flex-grow">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                {edu.year}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {edu.degree}
              </h3>
              <p className="text-gray-500">
                {edu.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;