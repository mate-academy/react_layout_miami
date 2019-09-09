import React from 'react';
import './footer.scss';

function Footer() {
  return (
      <footer className="footer">
        <div className="footer__logo">
          <img className="footer__logo-image" src="./images/logo.svg" alt="Miami logo" />
        </div>
        <div className="footer__copy">© 2013 Miami!</div>
      </footer>
  );
}

export default Footer;
