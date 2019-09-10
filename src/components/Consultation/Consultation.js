import React from 'react';
import './Common.scss';
import './Section.scss';

function Consultation() {
  return (
    <section className="section consultation">
      <div className="container">
        <h2 className="section__title">
          Consultation
          <span className="section__title--img"> </span>
        </h2>

        <div className="section__grid">
          <div className="section__left textual">
            <h2>
              How long have
              <br />
              you do yourself a gift?
            </h2>
            <p>
              The procedural change mezzo forte starts izoritmichesky
              pickup at these moments stop LA Mazel and VA Tsukkerman in
              his `Analysis of musical works.` Pointillism, which originated
              in the music of the early twentieth century,
              microforms, found a distant historical
            </p>
          </div>

          <div className="section__right">
            <div className="form">
              <div className="form__field">
                <input
                  type="text"
                  name="firstname"
                  placeholder="NAME"
                  className="input"
                />
              </div>
              <div className="form__field">
                <input
                  type="tel"
                  placeholder="PHONE"
                  name="phone"
                  className="input"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div className="form__field">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  className="input"
                />
              </div>
              <div className="form__submit">
                <button type="button" className="button">
                  consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
