import React from 'react';

function Consultation() {
  return (
      <section className="section consultation">
        <div className="container container--consultation">
          <h2 className="section__title">
            Consultation
            <span className="section__title-image"></span>
          </h2>
          <div className="consultation__info">
            <h2 className="consultation__title">How long have<br/>
              you do yourself a gift?</h2>
            <p className="consultation__text">The procedural change mezzo forte starts izoritmichesky pickup at these
              moments
              stop LA Mazel and VA Tsukkerman in his "Analysis of musical works." Pointillism, which originated in the
              music
              of the early twentieth century, microforms, found a distant historical</p>
          </div>
          <div className="consultation__form">
            <div className="form">
              <div className="form__field">
                <input type="text" placeholder="Name" className="input"/>
              </div>
              <div className="form__field">
                <input type="text" placeholder="Phone" className="input"/>
              </div>
              <div className="form__field">
                <input type="text" placeholder="Email" className="input"/>
              </div>
              <div className="form__submit">
                <button className="button">Consultation</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Consultation;
