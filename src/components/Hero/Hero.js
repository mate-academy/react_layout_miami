import React from 'react';
import './Hero.scss';

export const Hero = () => {
  return (
    <div className="hero" style={{backgroundImage: 'url(images/header.png)'}}>
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
        <ul className="nav">
          <li><a href="/" className="header__link">Home</a></li>
          <li><a href="/" className="header__link">About Us</a></li>
          <li><a href="/" className="header__link">gallery</a></li>
          <li><a href="/" className="header__link">consultation</a></li>
          <li><a href="/" className="header__link">testimonials</a></li>
          <li><a href="/" className="header__link">Contacts</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
