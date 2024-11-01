import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          <FontAwesomeIcon icon={faCopyright} className="mr-1" />
          2024 YouTube Downloader. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
