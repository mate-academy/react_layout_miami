import React from 'react';
import './SectionContact.scss';
import Form from '../Form/Form';

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
          <Form />
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
