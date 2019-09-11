import React from 'react';

import './Consultation.scss';
import ConsultationForm from '../../../Consultation-form/Consultation-form';

const Consultation = () => (
  <section className="section consultation" id="consultation">
    <div className="container container--consultation">
      <h2 className="section__title">
        consultation
      </h2>
      <div className="content">
        <div className="content__left">
          <h3>
            How long have
            <br />
            you do yourself a gift?
          </h3>
          <p>
            The procedural change mezzo forte starts izoritmichesky pickup at
            these moments stop LA Mazel and VA Tsukkerman in his "Analysis
            of musical works." Pointillism, which originated in the music of
            the early twentieth century, microforms, found a distant historical
          </p>
        </div>
        <div className="content__right">
          <ConsultationForm btnName="consultation" />
        </div>
      </div>
    </div>
  </section>
);

export default Consultation;
