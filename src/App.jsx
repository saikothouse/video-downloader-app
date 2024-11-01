import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';
import About from './components/About';
import FAQ from './components/FAQ';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import Terms from './pages/Terms';
import AboutPage from './pages/AboutPage';
import SEO from './components/SEO';

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
    <Router>
      <div className="flex flex-col min-h-screen">
        <SEO 
          title="YouTube Downloader"
          description="Easily download your favorite YouTube videos and audio using our YouTube Downloader. With a modern UI, built using Vite and React, and styled with Tailwind CSS, our tool provides an efficient and seamless experience."
          keywords="YouTube, video, audio, downloader, Vite, React, Tailwind CSS, modern UI, SEO"
        />
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Switch>
            <Route path="/" exact>
              <h1 className="text-3xl mb-4 font-bold">YouTube Downloader</h1>
              <p className="mb-4">
                Easily download your favorite YouTube videos and audio using our YouTube Downloader. With a modern UI, built using Vite and React, and styled with Tailwind CSS, our tool provides an efficient and seamless experience. Search for videos using the auto-complete feature, view video thumbnails, and download content with just a click. Optimize your downloads with our advanced downloader!
              </p>
              <SearchBar onSearch={handleSearch} />
              <VideoList videos={videos} onDownload={handleDownload} />
              <Features />
              <About />
              <FAQ />
            </Route>
            <Route path="/privacy" component={Privacy} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/terms" component={Terms} />
            <Route path="/about" component={AboutPage} />
            <Route path="/features" component={Features} />
            <Route path="/faq" component={FAQ} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
