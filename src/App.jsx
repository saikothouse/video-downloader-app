import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';
import About from './components/About';
import FAQ from './components/FAQ';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const App = () => {
  const [videos, setVideos] = useState([]);

  const handleSearch = (video) => {
    setVideos([video]);
  };

  const handleDownload = async (videoId) => {
    try {
      const response = await fetch(`http://localhost:3000/download?url=https://www.youtube.com/watch?v=${videoId}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${videoId}.mp4`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error('Error downloading video:', error);
      alert('Failed to download video');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl mb-4 font-bold">YouTube Downloader</h1>
        <p className="mb-4">
          Easily download your favorite YouTube videos and audio using our YouTube Downloader. With a modern UI, built using Vite and React, and styled with Tailwind CSS, our tool provides an efficient and seamless experience. Search for videos using the auto-complete feature, view video thumbnails, and download content with just a click. Optimize your downloads with our advanced downloader!
        </p>
        <SearchBar onSearch={handleSearch} />
        <VideoList videos={videos} onDownload={handleDownload} />
        <Features />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
