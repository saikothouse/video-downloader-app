import React from 'react';
import SEO from '../components/SEO';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <SEO 
        title="About Us - YouTube Downloader"
        description="Learn more about YouTube Downloader and our mission."
        keywords="about, YouTube, downloader, team, mission"
      />
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>We are dedicated to providing you with an easy and efficient way to download your favorite YouTube videos and audio...</p>
    </div>
  );
};

export default AboutPage;
