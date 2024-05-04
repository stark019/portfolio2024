import React from 'react';
import Education from './Education';
import Experience from './ExperienceSection';

const ExperienceAndEducation = () => {
  return (
    <div className="container mx-auto py-12 xl:flex p-5">
      <Experience/>
      <Education />
    </div>
  );
};

export default ExperienceAndEducation;
