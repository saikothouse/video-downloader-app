import React from 'react';
import SEO from '../components/SEO';

const Disclaimer = () => {
  return (
    <div className="container mx-auto p-4">
      <SEO 
        title="Disclaimer - YouTube Downloader"
        description="Read our disclaimer for important information about our service."
        keywords="disclaimer, terms, YouTube, downloader"
      />
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p>This is a disclaimer. The content provided by YouTube Downloader is for informational purposes only...</p>
    </div>
  );
};

export default Disclaimer;
