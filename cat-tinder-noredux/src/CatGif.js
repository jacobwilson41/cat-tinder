import React from 'react';
import './CatGif.css';
import { pullChange } from './animation-logic';

const CatGif = ({ url }) => {
  const handleDrag = (e) => {
    pullChange(e);
  };
  return (
    <div className="demo">
      <header className="demo__header">Cat Tinder</header>
      <div className="demo__content">
        <div
          draggable="true"
          ondragstart={handleDrag}
          className="demo__card-cont"
        >
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
