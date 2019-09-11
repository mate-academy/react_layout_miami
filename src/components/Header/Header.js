import React from 'react';
import './Header.scss';


const Header = () => (
  <header className="hero">
    <div className="container">
      <div className="header">
        <div className="header_logo">
          <img src="images/logo.png" alt="Miami logo" />
        </div>
        <a href="tel:" className="header_phone">
          8 800 500 50 50
        </a>
        <a href="tel:" className="header_call">
          call to order
        </a>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav_elem">
            <a href="#">Home</a>
          </li>
          <li className="nav_elem">
            <a href="#">About us</a>
          </li>
          <li className="nav_elem">
            <a href="#">Gallery</a>
          </li>
          <li className="nav_elem">
            <a href="#">Consultation</a>
          </li>
          <li className="nav_elem">
            <a href="#">Testimonials</a>
          </li>
          <li className="nav_elem">
            <a href="#">Home</a>
          </li>
          <li className="nav_elem">
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
