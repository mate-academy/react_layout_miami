import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="logo-icon" src="images/header__logo.svg" alt="" />
      </div>
      <div className="footer__copy">
        © 2013 Miami.
      </div>
    </footer>
  );
}

export default Footer;
