import React from 'react';
import '../App.scss';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img
          src="../images/logo.png"
          alt="miami condo kings"
          className="header__logo--img"
        />
      </div>

      <div className="footer__copy">
        © 2013 Miami.
      </div>
    </footer>
  );
}

export default Footer;
