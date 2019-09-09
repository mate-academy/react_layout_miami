import React from 'react';

function ContactForm() {
  return (
    <form className="contact__form form">
      <div className="form_field">
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
        <textarea
          name="contact-textarea"
          id
          cols
          rows
          placeholder="message"
          className="form__textarea"
          defaultValue=""
        />
      </div>
      <div className="form__submit">
        <button type="button" className="button form__button">
          Write to Us
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
