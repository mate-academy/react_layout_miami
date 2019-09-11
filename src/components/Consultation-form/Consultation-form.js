import React from 'react';

import './Consultation-form.scss';

const ConsultationForm = () => (
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
        placeholder="phone"
        type="tel"
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
    <button className="button" type="submit">consultation</button>
  </form>
);

export default ConsultationForm;
