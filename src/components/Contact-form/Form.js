import React from 'react';
import Button from '../Button/Button';

import './Form.scss';

// eslint-disable-next-line no-shadow
const ContactForm = (props) => {
  const btnName = props.btnName;
  return (
    <form className="form" action="#">
      <div className="form__field">
        <input
          placeholder="name"
          type="text"
          className="input"
        />
      </div>
      <div className="form__field">
        <input
          placeholder="email"
          type="email"
          className="input"
        />
      </div>
      <div className="form__field">
        <textarea
          name="message"
          placeholder="message"
          cols="30"
          rows="10"
        />
      </div>
      <Button btnName={btnName} />
    </form>
  );
};

export default ContactForm;
