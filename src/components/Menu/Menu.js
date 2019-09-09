import React from 'react';

import './Menu.scss';

function Menu() {
  return (
    <ul className="header__menu menu">
      <li className="menu__li">
        <a href="/" className="menu__link">
          Home
        </a>
      </li>
      <li className="menu__li">
        <a href="/" className="menu__link">
          About Us
        </a>
      </li>
      <li className="menu__li">
        <a href="/" className="menu__link">
          galerry
        </a>
      </li>
      <li className="menu__li">
        <a href="/" className="menu__link">
          consultation
        </a>
      </li>
      <li className="menu__li">
        <a href="/" className="menu__link">
          testimonials
        </a>
      </li>
      <li className="menu__li">
        <a href="/" className="menu__link">
          contact us
        </a>
      </li>
    </ul>
  );
}

export default Menu;
