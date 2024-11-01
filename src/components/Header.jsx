import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">YouTube Downloader</h1>
        <nav>
          <a href="#features" className="ml-4">
            <FontAwesomeIcon icon={faVideo} className="mr-1" /> Features
          </a>
          <a href="#about" className="ml-4">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> About
          </a>
          <a href="#faq" className="ml-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-1" /> FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
