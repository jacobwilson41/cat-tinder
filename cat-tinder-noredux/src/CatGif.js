import React from 'react';
import './CatGif.css';

const CatGif = ({ url, getGif }) => {
  const handleClick = () => {
    getGif();
  };

  return (
    // <div className="flex-container">
    //   <img onClick={handleClick} src={url} alt="cat"></img>
    //   <div className="kitty">DM me</div>
    // </div>

    <div className="demo">
      <header className="demo__header">Cat Tinder</header>
      <div className="demo__content">
        <div className="demo__card-cont">
          <div className="demo__card">
            <div className="demo__card__top">
              <img src={url} className="demo__card__img"></img>
            </div>
            <div className="demo__card__btm">
              <p className="demo__card__we">DM me</p>
            </div>
            <div className="demo__card__choice m--reject"></div>
            <div className="demo__card__choice m--like"></div>
            <div className="demo__card__drag"></div>
          </div>
        </div>
        <p className="demo__tip">Swipe left or right</p>
      </div>
    </div>
  );
};

export default CatGif;
