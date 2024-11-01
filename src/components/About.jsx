import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
        </h2>
        <p>
          YouTube Downloader is an application designed to make it easy for you to download your favorite YouTube videos and audio. Built with Vite, React, and Tailwind CSS, our tool offers a sleek and efficient user experience.
        </p>
      </div>
    </section>
  );
};

export default About;
