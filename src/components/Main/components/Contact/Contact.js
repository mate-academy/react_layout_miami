import React from 'react';
import ContactForm from '../../../Contact-form/Form';

import './Contact.scss';

const Contact = () => (
  <section className="section contact" id="contact">
    <div className="container container--contact">
      <h2 className="section__title">
        contact
      </h2>
      <div className="content">
        <div className="content__left">
          <p className="our-email">
            <a href="mailto:hello@miami.com">Hello@miami.com</a>
          </p>
          <ul className="phones__list">
            <li className="phones__list-item">
              <a href="tel:88006787878">8 800 678 78 78</a>
            </li>
            <li className="phones__list-item">
              <a href="tel:88007009898">8 800 700 98 98</a>
            </li>
          </ul>
          <p className="our__address">
            400 first ave. n.
            <br />
            suite 700
            <br />
            Minneapolis, MN 55401
          </p>
        </div>
        <div className="content__right">
          <ContactForm btnName="write to us" />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
