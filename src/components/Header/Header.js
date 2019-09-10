import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="hero">
      <div className="container container__header">
        <header className="header">
          <div className="logo__order">
            <a
              href="https://codyhouse.co/library/?s=cart"
              className="header__phone link__decor"
            >
              8 800 500 50 50
            </a>
            <div className="header__logo">
              <img
                className="logo-icon"
                src="images/header__logo.svg"
                alt="miami-logo"
              />
            </div>
            <a
              href="https://www.google.com/search?q=%D0%BA%D0%BE%D1%82%D
              0%B8%D0%BA%D0%B8&rlz=1C1SQJL
              _enUA856UA856&source=lnms&tbm=isch&sa=X&ved=0ahU
              KEwj_2vuiq6rkAhXmAxAIHR3WBcQQ_AUIESgB&biw
              =1366&bih=625#imgrc=fDvwArTGtzOOzM:"
              className="header__call link__decor"
            >
            CALL TO ORDER
            </a>
          </div>
        </header>

        <ul className="nav">
          <li>
            <a
              className="link__decor"
              href="https://codyhouse.co/library/?s=cart"
            >
                Home
            </a>
          </li>
          <li>
            <a
              className="link__decor"
              href="https://codyhouse.co/library/?s=cart"
            >
                About Us
            </a>
          </li>
          <li>
            <a
              className="link__decor"
              href="https://codyhouse.co/library/?s=cart"
            >
                Gallery
            </a>
          </li>
          <li>
            <a
              className="link__decor"
              href="https://codyhouse.co/library/?s=cart"
            >
                Consultation
            </a>
          </li>
          <li>
            <a
              className="link__decor"
              href="https://codyhouse.co/library/?s=cart"
            >
                Testimonials
            </a>
          </li>
          <li>
            <a
              className="link__decor"
              href="https://codyhouse.co/library/?s=cart"
            >
                Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
