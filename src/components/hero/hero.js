import React from 'react';
import logo from '../../images/logo.svg';

function Hero() {
  return (
    <div className="hero">
      <div className="container container--hero">
        <div className="header">
          <div className="header__logo logo">
            <a className="logo__link" href="/">
              <img
                className="logo__image"
                src={logo}
                alt="Miami logo"
              />
            </a>
          </div>
          <a href="tel:" className="header__phone">8 800 500 50 50</a>
          <a href="tel:" className="header__call">call to order</a>
        </div>
        <ul className="nav">
          <li className="nav__item">
            <a className="nav__link" href="#">Home</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">About Us</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">gallery</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">consultation</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">testimonials</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
