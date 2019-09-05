import React from 'react';
import '../App.scss';

function Contact() {
  return (
    <section className="contact section">
      <div className="container clearfix">
        <h2 className="section__title">
          Contact
          <span className="section__title--img" />
        </h2>

        <div className="section__left textual textual-big">
          <p>
            <a href="mailto:hello@miami.com">Hello@miami.com</a>
          </p>
          <p>
            800 678 78 78
            <br />
            8 800 700 98 98
          </p>
          <p>
            400 first ave. n.suite 700
            <br />
            Minneapolis, MN 55401
          </p>
        </div>

        <div className="section__right">
          <div className="form">
            <div className="form__field">
              <input type="text" placeholder="Name" className="input" />
            </div>

            <div className="form__field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="form__field">
              <textarea
                name="message"
                className="textarea"
                placeholder="Message"
              />
            </div>

            <div className="form__submit">
              <button type="button" className="button">Write to us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
