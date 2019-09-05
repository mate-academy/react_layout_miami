import React from 'react';

import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="container container--header">
      <div className="logo__container">
        <a
          href="tel:88005005050"
          className="header__phone"
        >
            8 800 500 50 50
        </a>
        <a href="#" className="header__logo">
          <img
            src="http://localhost:3000/images/dark-back.png"
            alt="Miami logo"
            title="Miami"
          />
        </a>
        <a href="tel:" className="header__call">call to order</a>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="#">home</a>
          </li>
          <li className="nav__list-item">
            <a href="#about-us">about us</a>
          </li>
          <li className="nav__list-item">
            <a href="#gallery">gallery</a>
          </li>
          <li className="nav__list-item">
            <a href="#consultation">consultation</a>
          </li>
          <li className="nav__list-item">
            <a href="#testimonials">testimonials</a>
          </li>
          <li className="nav__list-item">
            <a href="#contact">contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
