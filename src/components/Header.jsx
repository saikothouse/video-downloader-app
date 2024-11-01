import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faQuestionCircle, faFileAlt, faGavel, faUserShield } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          YouTube Downloader
        </h1>
        <nav className="flex">
          <Link to="/" className="ml-4 flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-1" />Home
          </Link>
          <Link to="#features" className="ml-4 flex items-center">
            <FontAwesomeIcon icon={faFileAlt} className="mr-1" />Features
          </Link>
          <Link to="/about" className="ml-4 flex items-center">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />About
          </Link>
          <Link to="#faq" className="ml-4 flex items-center">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-1" />FAQ
          </Link>
          <Link to="/privacy" className="ml-4 flex items-center">
            <FontAwesomeIcon icon={faUserShield} className="mr-1" />Privacy
          </Link>
          <Link to="/terms" className="ml-4 flex items-center">
            <FontAwesomeIcon icon={faGavel} className="mr-1" />Terms
          </Link>
          <Link to="/disclaimer" className="ml-4 flex items-center">
            <FontAwesomeIcon icon={faFileAlt} className="mr-1" />Disclaimer
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
