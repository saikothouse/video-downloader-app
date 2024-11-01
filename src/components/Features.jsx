import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section id="features" className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc ml-6">
          <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Search YouTube videos with auto-complete</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />View video thumbnails and details</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Download videos and audio with a single click</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />Modern and responsive UI</li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
