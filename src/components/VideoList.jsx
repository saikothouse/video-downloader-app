import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const VideoList = ({ videos, onDownload }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {videos.map((video) => (
        <div key={video.id.videoId} className="p-4 border rounded shadow-lg bg-white">
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full rounded" />
          <h3 className="mt-2 text-lg font-semibold">{video.snippet.title}</h3>
          <button
            onClick={() => onDownload(video.id.videoId)}
            className="mt-2 flex items-center px-4 py-2 bg-blue-600 text-white rounded"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
