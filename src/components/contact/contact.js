import React from 'react';

function Contact() {
  return (
    <section className="section contact">
      <div className="container container--contact">
        <h2 className="section__title">
          Contact
          <span className="section__title-image"></span>
        </h2>
        <div className="contact__info">
          <p className="contact__info-email">
            <a className="contact__info-email-link" href="mailto:Hello@miami.com">Hello@miami.com</a>
          </p>
          <p className="contact__info-phone">
            <a href="tel:" className="contact__info-phone-link">8 800 678 78 78</a>
            <br />
            <a href="tel:" className="contact__info-phone-link">8 800 700 98 98</a>
          </p>
          <p className="contact__info-address">
            400 first ave. n.
            <br />
            suite 700
            <br />
            Minneapolis, MN 55401
          </p>
        </div>
        <div className="contact__form">
          <div className="form">
            <div className="form__field">
              <input
                type="text"
                placeholder="Name"
                className="input"
              />
            </div>
            <div className="form__field">
              <input
                type="text"
                placeholder="Email"
                className="input"
              />
            </div>
            <div className="form__field">
              <textarea
                className="textarea"
                name=""
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
              />
            </div>
            <div className="form__submit">
              <button type="button" className="button">write to us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
