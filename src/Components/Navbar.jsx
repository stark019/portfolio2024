import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="relative bg-gradient-to-r from-purple-700 to-purple-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://i.ibb.co/WkpHQ2k/download.jpg" alt="dp" className="w-12 h-12 rounded-full mr-4" />
        <div className="text-white">
          <span className="font-bold">Nihal</span>{' '}
          <span className="font-cursive">Pandey</span>
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={toggleMenu} className="text-white md:hidden">
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </button>
        <div className={`md:hidden absolute top-full right-0 bg-purple-700 p-2 rounded-md w-full ${showMenu ? 'block' : 'hidden'}`}>
          <NavLink title="Home" />
          <NavLink title="Experience" />
          <NavLink title="Education" />
          <NavLink title="Skills" />
          <NavLink title="Projects" />
          <NavLink title="Hobbies" />
          <DownloadButton />
        </div>
        <div className="hidden md:flex">
          <NavLink title="Home" />
          <NavLink title="Experience" />
          <NavLink title="Education" />
          <NavLink title="Skills" />
          <NavLink title="Projects" />
          <NavLink title="Hobbies" />
        </div>
      </div>
      <div className="hidden md:flex">
        <DownloadButton />
      </div>
    </nav>
  );
};

const NavLink = ({ title }) => {
  return (
    <button className="text-white hover:bg-purple-900 hover:text-white rounded-full px-4 py-2 block md:inline-block md:mt-0 mt-2">
      {title}
    </button>
  );
};

const DownloadButton = () => {
  return (
    <button className="bg-white text-purple-700 hover:bg-purple-900 hover:text-white rounded-full px-4 py-2 flex items-center">
      Download Resume <FontAwesomeIcon icon={faDownload} className="ml-2" />
    </button>
  );
};

export default Navbar;
