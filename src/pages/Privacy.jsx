import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <div className="container mx-auto p-4">
      <SEO 
        title="Privacy Policy - YouTube Downloader"
        description="Read our privacy policy to understand how we handle your data."
        keywords="privacy, policy, data, YouTube, downloader"
      />
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information...</p>
    </div>
  );
};

export default Privacy;
