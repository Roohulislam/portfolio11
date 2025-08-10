import React from "react";

const educationData = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Hazara University Mansehra, Pakistan",
    duration: "[ 2021 – 2025 ]",
    details: {
      city: "Mansehra",
      country: "Pakistan",
      website: "http://www.hu.edu.pk",
      eqf: "EQF level 6"
    }
  },
  {
    degree: "Higher Secondary School Certificate Examination",
    institution: "Afaq Public School and College kanai allai battagram, Pakistan",
    duration: "[ 2018 – 2019 ]",
    details: {
      city: "Battagram",
      country: "Pakistan",
      eqf: "EQF level 4"
    }
  },
  {
    degree: "Secondary School Certificate Examination",
    institution: "GHS kanai Battagram",
    duration: "[ 2016 – 2017 ]",
    details: {
      city: "Battagram",
      country: "Pakistan",
      eqf: "EQF level 2"
    }
  },
];

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-2 mt-1 lg:px-2 py-2 bg-gray-100">
      <div className="text-center mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 font-serif">
          Education and Training
        </h2>
      </div>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
              <h3 className="text-xl sm:text-xl font-bold text-gray-800 mb-2 sm:mb-0">
                {edu.degree}
              </h3>
              <span className="text-gray-500 font-medium">
                {edu.duration}
              </span>
            </div>
            
            <h4 className="text-sm text-gray-700 font-medium mb-4">
              {edu.institution}
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
              <p className="text-gray-600">
                <span className="font-semibold">City:</span> {edu.details.city}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Country:</span> {edu.details.country}
              </p>
              {edu.details.website && (
                <p className="text-gray-600 sm:col-span-2">
                  <span className="font-semibold">Website:</span> 
                  <a 
                    href={edu.details.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    {edu.details.website}
                  </a>
                </p>
              )}
              <p className="text-gray-600">
                <span className="font-semibold">Level in EQF:</span> {edu.details.eqf}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;