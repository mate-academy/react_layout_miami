import React from 'react';
import './Form.scss';

function Form() {
  return (
    <form className="form">
      <div className="form__field">
        <input
          type="text"
          placeholder="name"
          className="form__input"
          name="name"
        />
      </div>
      <div className="form__field">
        <input
          type="tel"
          placeholder="phone"
          className="form__input"
          name="phone"
        />
      </div>
      <div className="form__field">
        <input
          type="email"
          placeholder="email"
          className="form__input"
          name="email"
        />
      </div>
      <div className="form__submit">
        <button type="button" className="button form__button">
          consultation
        </button>
      </div>
    </form>
  );
}

export default Form;
