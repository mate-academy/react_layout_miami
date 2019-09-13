import React from 'react';

function ContactLeft() {
  return (
    <div className="contact__left">
      <a href="mailto:hello@miami.com" className="contact__link">
        Hello@miami.com
      </a>
      <br />
      <a href="tel:=" className="contact__tel">
        8 800 678 78
      </a>
      <br />
      <a href="tel:=" className="contact__tel contact__tel--margin-bottom">
        8 800 678 78
      </a>
      <br />
      <p className="contact__adress">
        {' '}
        400 first ave. n.
        <br />
        suite 700
        <br />
        Minneapolis, MN 55401
        {' '}
      </p>
    </div>
  );
}

export default ContactLeft;
