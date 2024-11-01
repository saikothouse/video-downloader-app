import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faMusic } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [conversionType, setConversionType] = useState('video'); // 'video' or 'mp3'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = conversionType === 'video' 
        ? `https://your-api-url.com/download?url=${encodeURIComponent(videoUrl)}`
        : `https://your-api-url.com/convert-to-mp3?url=${encodeURIComponent(videoUrl)}`; // Adjust API endpoint for MP3 conversion

      const response = await fetch(endpoint);
      const data = await response.json();

      if (response.ok) {
        setDownloadLink(data.downloadLink); // Adjust according to your API response
      } else {
        setError(data.message || 'Failed to process request');
      }
    } catch (error) {
      setError('An error occurred while processing the request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Helmet>
        <title>YouTube Video Downloader & MP3 Converter</title>
        <meta name="description" content="Download videos or convert YouTube videos to MP3 easily." />
        <meta name="keywords" content="video downloader, mp3 converter, youtube downloader" />
      </Helmet>

      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-3xl font-bold">YouTube Video Downloader & MP3 Converter</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <input
            type="text"
            placeholder="Enter YouTube Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="border p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex justify-between mb-4">
            <button
              type="button"
              className={`flex items-center justify-center p-2 rounded w-1/2 ${conversionType === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
              onClick={() => setConversionType('video')}
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Download Video
            </button>
            <button
              type="button"
              className={`flex items-center justify-center p-2 rounded w-1/2 ${conversionType === 'mp3' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
              onClick={() => setConversionType('mp3')}
            >
              <FontAwesomeIcon icon={faMusic} className="mr-2" />
              Convert to MP3
            </button>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200" disabled={loading}>
            {loading ? 'Processing...' : (conversionType === 'video' ? 'Download Video' : 'Convert to MP3')}
          </button>
          {downloadLink && (
            <div className="mt-4">
              <p className="text-green-600">Download Link:</p>
              <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {downloadLink}
              </a >
            </div>
          )}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-gray-600 py-4">
        <p className="text-center">Copyright 2023 YouTube Video Downloader & MP3 Converter</p>
      </footer>
    </div>
  );
}

export default App;