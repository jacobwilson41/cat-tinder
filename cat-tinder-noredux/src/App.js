import React, { useState, useEffect } from 'react';
import './App.css';
import CatGif from './CatGif';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');

  const getGif = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search?mime_types=gif';
    const gif = await axios.get(url);

    setUrl(gif.data[0].url);
  };

  useEffect(() => {
    getGif();
  }, []);

  return <CatGif url={url} getGif={() => getGif()} />;
}

export default App;
