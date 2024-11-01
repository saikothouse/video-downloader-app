import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=YOUR_API_KEY`);
    setSuggestions(response.data.items);
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const handleSelect = (video) => {
    setQuery(video.snippet.title);
    onSearch(video);
    setSuggestions([]);
  };

  return (
    <div className="relative flex items-center">
      <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-500" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full pl-10 pr-4 py-2 border rounded"
        placeholder="Search YouTube..."
      />
      <ul className="absolute w-full bg-white border rounded shadow-lg">
        {suggestions.map((video) => (
          <li
            key={video.id.videoId}
            onClick={() => handleSelect(video)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          >
            {video.snippet.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
