import React from 'react';
import '../App.scss';

function Consultation() {
  return (
    <section className="consultation section">
      <div className="container clearfix">
        <h2 className="section__title">
          Consultation
          <span className="section__title--img" />
        </h2>

        <div className="section__left textual">
          <h2>
            How long have
            <br />
            you do yourself a gift?
          </h2>
          <p>
            The procedural change mezzo forte starts
            izoritmichesky pickup at these moments stop LA Mazel and VA
            Tsukkerman in his `&quot;`Analysis of musical works.`&quot;`
            Pointillism, which originated in the music of the
            early twentieth century, microforms, found a distant historical
          </p>
        </div>

        <div className="section__right">
          <div className="form">
            <div className="form__field">
              <input type="text" placeholder="Name" className="input" />
            </div>

            <div className="form__field">
              <input type="tel" placeholder="Phone" className="input" />
            </div>

            <div className="form__field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="form__submit">
              <button type="submit" className="button">
                consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
