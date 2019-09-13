import React from 'react';
import CenterTitle from '../CenterTitle/CenterTitle';
import './Consultation.scss';
import Form from '../Form/Form';

function Consultation() {
  return (
    <div className="section consultation">
      <CenterTitle title="Consultation" />
      <div className="container consultation__flex-wrapper">
        <div className="consultation__left">
          <div className="consultation__title">
            How long have you
            <br />
            do yourself a gift?
          </div>
          <p className="consultation__subtitle">
            The procedural change mezzo forte starts izoritmichesky pickup at
            these moments stop LA Mazel and VA Tsukkerman in his "Analysis of
            musical works." Pointillism, which originated in the music of the
            early twentieth century, microforms, found a distant historical
          </p>
        </div>
        <div className="consultation__right">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Consultation;
