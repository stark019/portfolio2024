import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faUbuntu} from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
  return (
    <div className="bg-purple-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        {/* Experience */}
        <div className="text-center md:text-left md:w-1/3 mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="text-5xl font-bold mr-2">2+</span>
            <p className="text-lg">years of experience</p>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="text-center md:text-left md:w-1/3 mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="text-5xl font-bold mr-2">10+</span>
            <p className="text-lg">completed projects</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center md:text-left md:w-1/3">
          <div className="flex justify-center md:justify-start">
            <Icon icon={faHtml5} color="#E44D26" />
            <Icon icon={faCss3Alt} color="#264DE4" />
            <Icon icon={faJs} color="#F0DB4F" />
            <Icon icon={faReact} color="#61DAFB" />
            <Icon icon={faNodeJs} color="#68A063" />
            <Icon icon={faUbuntu} color="#E95420" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ icon, color }) => {
  return (
    <FontAwesomeIcon icon={icon} className="text-4xl mx-2" style={{ color }} />
  );
};

export default Banner;
