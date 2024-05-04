// Experience.js
import React from 'react';

const Experience = () => {
  return (
    <div className="md:w-2/3 md:order-2 md:pl-8 md:mb-0 mb-8">
      <div className="text-center mb-8 md:text-left">
        <h2 className="text-3xl font-bold text-purple-900">Experience</h2>
        <p className="text-lg text-gray-700">My work journey so far</p>
      </div>
      <div className="md:border-l-2 md:border-purple-700 md:pl-4">
        {/* Experience details */}
        <div className="mb-8">
          <h3 className="text-lg font-bold">GlobalLogic (a Hitachi group company), Noida</h3>
          <p>Software engineer</p>
          <p>July 2022 - PRESENT</p>
          <ul className="list-disc ml-6">
            <li>Delivered projects on data mapping and visualization in the BFSI delivery unit with complete ownership of frontend. (Tech Stack: ReactJs + Java Springboot)</li>
            <li>Refactored the complete module by implementing the best practices and integrating state management libraries like Redux and ContextAPI</li>
            <li>Added various UI features using the MUI library.</li>
            <li>Resolved 200+ bugs in the existing codebase.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Newgen Software, Noida</h3>
          <p>Software Development Intern</p>
          <p>January 2022 - July 2022</p>
          <ul className="list-disc ml-6">
            <li>Got trained in Business process management software and contributed in building loan distribution systems for National Bank of Kuwait.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
