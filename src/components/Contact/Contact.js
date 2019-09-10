import React from 'react';
import './Common.scss';
import './Section.scss';

function Contact() {
  return (
    <section className="section contacts">
      <div className="container">
        <h2 className="section__title">
          Contacts
          <span className="section__title--img"> </span>
        </h2>

        <div className="section__grid">

          <div className="section__left textual textual_big">
            <p>
              <a href="mailo:hello@miami.com">
                Hello@miami.com
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/yuriy3vovk">
                8 800 678 78 78
              </a>
              <br />
              <a href="https://www.facebook.com/yuriy3vovk">
                8 800 700 98 98
              </a>
            </p>
            <p>
              <a href="https://www.google.com/maps?q=400+fir
                st+ave.+n.+suite+700+Minneapolis
                MN+55401&rlz=1C1SQJL_enUA856UA856&um=1&ie=
                UTF-8&sa=X&ved=0ahUKEwja-anRtKrkAhUp
                i8MKHdLXAn4Q_AUIESgB"
              >
                400 first ave. n.
                <br />
                suite 700
                <br />
                Minneapolis, MN 55401
              </a>
            </p>
          </div>

          <div className="section__right">
            <div className="form">
              <div className="form__field">
                <input
                  type="text"
                  name="firstname"
                  placeholder="NAME"
                  className="input"
                />
              </div>
              <div className="form__field">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  className="input"
                />
              </div>
              <div className="form__field">
                <textarea
                  className="textarea"
                  name="comment"
                  placeholder="MESSAGE"
                />
              </div>
              <div className="form__submit">
                <button type="button" className="button">WRITE TO US</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
