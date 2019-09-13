import React from 'react';
import './Footer.scss';
import MainLogo from '../MainLogo/MainLogo';

function Footer() {
  return (
    <footer className="footer">
      <MainLogo additionalClass="footer__logo" />
      <div className="footer__copy"> © 2013 Miami </div>
    </footer>
  );
}

export default Footer;
