import React from 'react';
import CenterTitle from '../CenterTitle/CenterTitle';
import './Contact.scss';
import ContactLeft from './components/ContactLeft';
import ContactRight from './components/ContactRight';

export default function Contact() {
  return (
    <section className="contact">
      <CenterTitle title="Contact" />
      {/* ./ center-titles */}
      <div className="container contact__flex-wrapper">
        <ContactLeft />
        {/* section__left */}
        <ContactRight />
        {/* ./ section right */}
      </div>
    </section>
  );
}
