import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLaptop, faCalendar, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-purple-800 to-purple-900 text-white py-16 px-8 md:flex items-center">
      {/* Left Part */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello <span role="img" aria-label="Hi">👋</span></h1>
        <h2 className="text-6xl font-bold md:text-2xl mb-4 text-purple-400">I'm a Frontend Developer</h2>
        <p className="text-lg md:text-2xl mb-4">Let's build together</p>
        <div className="flex space-x-4 mb-8">
          <ButtonWithIcon title="Learn with me" icon={faLaptop} link='https://forms.gle/ZGddttBkVZvfcjf58' />
          <ButtonWithIcon title="Let's talk" icon={faCalendar} link='https://calendly.com/pandeynihal11/30min' />
        </div>
        <div className="md:hidden mt-8 text-center">
        <DownloadButton />
        </div>
        <div className="flex space-x-4 p-7">
          <a href="mailto:pandeynihal11@example.com" className="text-lg md:text-2xl text-purple-200 hover:text-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://github.com/stark019" className="text-lg md:text-2xl text-purple-200 hover:text-white">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/nihalpandey1901" className="text-lg md:text-2xl text-purple-200 hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/nihalpandey1901" className="text-lg md:text-2xl text-purple-200 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      
      </div>
      {/* Right Part */}
      <div className="md:w-1/2 md:ml-12 mt-8 md:mt-0">
        <iframe
          title="YouTube Video"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/QY8ICU9s914"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const ButtonWithIcon = ({ title, icon, link }) => {
  return (
    <a href={link} target='_blank'>
    <button className="bg-white text-purple-700 hover:bg-purple-900 hover:text-white rounded-full px-4 py-2 flex items-center">
      {title} <FontAwesomeIcon icon={icon} className="ml-2" />
    </button> </a>
  );
};

const DownloadButton = () => {
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=13nFvn5MAhE5K_kHufDMV90xKKE6QWnPW';

  return (
    <a href={resumeUrl}>
    <button  className="bg-white text-purple-700 hover:bg-purple-900 hover:text-white rounded-full px-4 py-2 flex items-center">
      Download Resume <FontAwesomeIcon icon={faDownload} className="ml-2" />
    </button></a>
  );
};

export default HeroSection;
