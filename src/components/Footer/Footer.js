import React from 'react';
import './Footer.scss';
// import footerBgImg from '../../images/footer-bg.png';
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
