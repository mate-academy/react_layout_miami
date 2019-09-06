import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: 'url(images/footer.png)' }}
    >
      <a className="footer__logo" href="/">
        <img src="images/dark_back_logo.svg" alt="miami logo" />
      </a>
      <div className="footer__copy">
        © 2013 Miami.
      </div>
    </footer>
  );
};

export default Footer;
