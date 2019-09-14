import React from 'react';
import './footer.scss';
import logo from '../../images/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__logo-image" src={logo} alt="Miami logo" />
      </div>
      <div className="footer__copy">© 2013 Miami!</div>
    </footer>
  );
}

export default Footer;
