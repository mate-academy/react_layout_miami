import React from 'react';
import './SectionContact.scss';

const SectionContact = () => {
  return (
    <div className="section contact">
      <div className="container container--contact">
        <div className="section__title">
          Contact
          <img
            className="section__crown"
            src="images/blue_crown.svg"
            alt="section title"
          />
        </div>

        <div className="section__left section__subtitle-2">
          <p className="margin-bottom-30">Hello@miami.com</p>
          <p>8 800 678 78 78</p>
          <p className="margin-bottom-30">8 800 700 98 98 </p>
          <p>400 first ave. n.</p>
          <p>suite 700</p>
          <p>Minneapolis, MN 55401</p>
        </div>

        <div className="section__right">
          <form className="form">
            <div className="form__field">
              <input
                className="form__input"
                name="name"
                type="text"
                placeholder="name"
                autoComplete="off"
              />
            </div>
            <div className="form__field">
              <input
                className="form__input"
                name="email"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="form__field">
              <textarea
                className="form__textarea"
                name="message"
                type="tel"
                placeholder="Message"
                rows="4"
              />
            </div>
            <button className="button" type="button">consultation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
