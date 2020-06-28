import React from 'react';
import './CatGif.css';

const CatGif = ({ url, getGif }) => {
  const handleClick = () => {
    getGif();
  };
  return (
    <div onClick={handleClick} className="container">
      <img src={url} alt="cat gif"></img>
    </div>
  );
};

export default CatGif;
