import React from 'react';
import './Hero.scss';
import Nav from '../Nav/Nav';

export const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: 'url(images/header.png)' }}>
      <header className="header">
        <div className="container container--header">
          <a href="/" className="header__phone header__link">8 800 500 50 50</a>
          <a href="/" className="header__logo">
            <img src="images/dark_back_logo.svg" alt="miami logo" />
          </a>
          <a href="/" className="header__call header__link">CALL TO ORDER</a>
        </div>
      </header>

      <div className="container">
        <Nav />
      </div>
    </div>
  );
};

export default Hero;
