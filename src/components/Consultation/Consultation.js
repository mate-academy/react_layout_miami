import React from 'react';
import './Consultation.scss';

const Consultation = () => (
  <section className="section consultation">
    <div className="container">
      <h2 className="section_title">
        Consultation
        <img src="images/decor.svg" alt="icon crown" />
      </h2>

      <div className="section_left textual">
        <h2>
          How long have
          <br />
          you do yourself a gift?
        </h2>
        <p>
          The procedural change mezzo forte starts izoritmichesky pickup at
          these moments stop LA Mazel and VA Tsukkerman in his "Analysis of
          musical works." Pointillism, which originated in the music of the
          early twentieth century, microforms, found a distant historical
        </p>
      </div>

      <div className="section_right">
        <div className="form">
          <div className="form_field">
            <input type="text" placeholder="Name" className="input" />
          </div>
          <div className="form_field">
            <input type="text" placeholder="Phone" className="input" />
          </div>
          <div className="form_field">
            <input type="text" placeholder="Email" className="input" />
          </div>
          <div className="form-submit">
            <button className="button">Consultation</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Consultation;
