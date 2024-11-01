import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section id="features" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          <FontAwesomeIcon icon={faListAlt} className="mr-2" /> Features
        </h2>
        <ul className="list-disc ml-6">
          <li>Search YouTube videos with auto-complete</li>
          <li>View video thumbnails and details</li>
          <li>Download videos and audio with a single click</li>
          <li>Modern and responsive UI</li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
