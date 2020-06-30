import React, { useState, useEffect } from 'react';
import './App.css';
import CatGif from './CatGif';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');

  const getGif = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search?mime_types=gif';
    const response = await axios.get(url);
    setUrl(response.data[0].url);
  };

  useEffect(() => {
    getGif();
  }, []);

  return <CatGif url={url} />;
}

export default App;
