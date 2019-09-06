import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <ul className="nav">
      <li><a href="/" className="header__link">Home</a></li>
      <li><a href="/" className="header__link">About Us</a></li>
      <li><a href="/" className="header__link">gallery</a></li>
      <li><a href="/" className="header__link">consultation</a></li>
      <li><a href="/" className="header__link">testimonials</a></li>
      <li><a href="/" className="header__link">Contacts</a></li>
    </ul>
  );
};

export default Nav;
