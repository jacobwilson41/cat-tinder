import React, { useState, useEffect } from 'react';
import './App.css';
import CatGif from './CatGif';
import useRequest from './hooks/use-request';

function App() {
  const [url, setUrl] = useState('');
  const { doRequest } = useRequest({
    url: 'https://api.thecatapi.com/v1/images/search?mime_types=gif',
    method: 'get',
    body: {},
    onSuccess: (data) => setUrl(data[0].url)
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <CatGif url={url} getGif={() => doRequest()} />;
}

export default App;
