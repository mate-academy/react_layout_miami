import React from 'react';
import './Contact.scss';

const Contact = () => (
  <section className="section contact">
    <div className="container">
      <h2 className="section_title">
        Contact
        <img src="images/decor.svg" alt="icon crown" />
      </h2>

      <div className="section_left textual textual_big">
        <p>
          <a href="#">Hello@miami.com</a>
        </p>
        <p>
          8 800 678 78 78
          <br />
          8 800 700 98 98
        </p>
        <p>
          400 first ave. n.
          <br />
          suite 700
          <br />
          Minneapolis, MN 55401
        </p>
      </div>

      <div className="section_right">
        <div className="form">
          <div className="form_field">
            <input type="text" placeholder="Name" className="input" />
          </div>
          <div className="form_field">
            <input type="text" placeholder="Email" className="input" />
          </div>
          <div className="form_field">
            <textarea
              className="textarea"
              name=""
              placeholder="Message"
              cols="20"
              rows="10"
            />
          </div>
          <div className="form-submit">
            <button className="button">Write to us</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
