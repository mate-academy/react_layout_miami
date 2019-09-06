import React from 'react';

const SectionConsultation = () => {
  return (
    <div className="section consultation">
      <div className="container container--consultation">
        <div className="section__title">
          Consultation
          <img
            className="section__crown"
            src="images/blue_crown.svg"
            alt="section title"
          />
        </div>
        <div className="section__left">
          <p className="section__subtitle margin-bottom">
            How long have
            <br />
            you do yourself a gift?
          </p>
          <p className="section__text">
            The procedural change mezzo forte starts izoritmichesky pickup at
            these moments stop LA Mazel and VA Tsukkerman in his
            &quote;Analysis of musical works.&quote; Pointillism, which
            originated in the music of the early twentieth century, microforms,
            found a distant historical
          </p>
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
                name="phone"
                type="tel"
                placeholder="phone"
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
            <button className="button" type="button">consultation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionConsultation;
