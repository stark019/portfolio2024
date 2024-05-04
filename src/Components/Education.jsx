// Education.js
import React from 'react';

const Education = () => {
  return (
    <div className="md:w-1/3 md:order-1">
      <div className="text-center mb-8 md:text-left">
        <h2 className="text-3xl font-bold text-purple-900">Education</h2>
        <p className="text-lg text-gray-700">My academic journey</p>
      </div>
      <div className="md:border-l-2 md:border-purple-700 md:pl-4">
        {/* Education details */}
        <div className="mb-8">
          <h3 className="text-lg font-bold">B Tech. Computer Science</h3>
          <p>JSS Academy of Technical Education</p>
          <p>Score: 7.95 CGPA</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Higher Senior Secondary</h3>
          <p>GN National Public School</p>
          <p>Score: 94.6%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
