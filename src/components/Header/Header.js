import React from 'react';
import MainLogo from '../MainLogo/MainLogo';
import Menu from '../Menu/Menu';

import mainBg from '../../images/main-bg.png';

import './Header.scss';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${mainBg})` }}>
      <div className="container header__flex-wrapper">
        <div className="header__top">
          <a href="tel:" className="header__phone">
            8 800 500 50 50
          </a>
          <MainLogo />
          <a href="tel:" className="header__call">
            call to order
          </a>
        </div>
        <nav className="header__nav">
          <Menu />
        </nav>
      </div>
    </header>
  );
}

export default Header;
