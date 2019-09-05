import React from 'react';
import './Header.scss';
import './Media.scss';

function Header() {
  return (
    <div className="hero">
      <div className="container">
        <div className="header">
          <a href="tel:" className="header__phone">
            8 800 500 50 50
          </a>
          <div className="header__logo">
            <a href="../App.js">
              <img
                src="../images/logo.png"
                alt="miami condo kings"
                className="header__logo--img"
              />
            </a>
          </div>
          <a href="tel:" className="header__call">
            call to order
          </a>
        </div>
        <ul className="main-menu">
          <li className="main-menu__item">
            <a href="#">Home</a>
          </li>
          <li className="main-menu__item">
            <a href="#">About us</a>
          </li>
          <li className="main-menu__item">
            <a href="#">Gallery</a>
          </li>
          <li className="main-menu__item">
            <a href="#" type="submit">Consultation</a>
          </li>
          <li className="main-menu__item">
            <a href="#">Testimonials</a>
          </li>
          <li className="main-menu__item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
