import React, { useState, useEffect } from 'react';
import './App.css';
import CatGif from './CatGif';
import axios from 'axios';

function App() {
  const [gif, setGif] = useState('');

  const getGif = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search?mime_types=gif';
    const response = await axios.get(url);
    setGif(response.data[0]);
  };

  useEffect(() => {
    getGif();
  }, []);

  return <CatGif url={gif.url} id={gif.id} />;
}

export default App;
