import React from "react";

const educationData = [
  {
    year: "2021 - 2025",
    degree: "Bachelor’s of Computer Science",
  },
  {
    year: "2017 - 2018",
    degree: "FSC Pre-Engineering",
  },
];

const Education = () => {
  return (
    <div className="p-8  rounded-2xl shadow-lg ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
        Education
      </h2>
      <div className=" gap-5 grid  grid-cols-2 ">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="p-4 bg-gray-200 rounded-lg shadow-md border border-gray-200 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-700">
              {edu.degree}
            </h3>
            <span className="text-blue-500 font-medium">{edu.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
