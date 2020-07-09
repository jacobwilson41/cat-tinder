import React from 'react';
import './CatGif.css';
import { pullChange } from './animation-logic';

const CatGif = ({ url, id }) => {
  const handleDrag = (e) => {
    pullChange(e);
  };
  return (
    <div className="gif">
      <header className="gif__header">Cat Tinder</header>
      <div className="gif__content">
        <div
          draggable="true"
          onDragStart={handleDrag}
          className="gif__card-cont">
          <div className="gif__card">
            <div className="gif__card__top">
              <img src={url} alt="cat gif" className="gif__card__img"></img>
            </div>
            <div className="gif__card__btm">
              <p className="gif__card__we">DM me</p>
            </div>
            <div className="gif__card__choice m--reject"></div>
            <div className="gif__card__choice m--like"></div>
            <div id={id} className="gif__card__drag"></div>
          </div>
        </div>
        <p className="gif__tip">Swipe left or right</p>
      </div>
    </div>
  );
};

export default CatGif;
