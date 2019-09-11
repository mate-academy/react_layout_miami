import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import './Form.scss';

const ContactForm = (props) => {
  const { btnName } = props;
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

ContactForm.defaultProps = {
  btnName: 'button',
};

ContactForm.propTypes = {
  btnName: PropTypes.string,
};

export default ContactForm;
