import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <form className="form">
      <div className="form__field">
        <input
          className="form__input"
          name="name"
          type="text"
          placeholder="name"
          autoComplete="off"
        />
      </div>
      <div className="form__field">
        <input
          className="form__input"
          name="email"
          type="email"
          placeholder="email"
        />
      </div>
      <div className="form__field">
        <textarea
          className="form__textarea"
          name="message"
          placeholder="Message"
          rows="4"
        />
      </div>
      <button className="button" type="button">consultation</button>
    </form>
  );
};

export default Form;
