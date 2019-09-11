import React from 'react';

import './Testimonials.scss';

const Testimonials = () => (
  <section className="section testimonials" id="testimonials">
    <div className="container container--testimonials">
      <h2 className="section__title">
        testimonials
      </h2>
      <ul className="testimonials__list">
        <li className="testimonial">
          <div className="testimonial__photo">
            <img
              src="./images/Layer-52.png"
              alt="Stev Joni"
              title="Stev Joni"
            />
          </div>
          <h3 className="testimonial__name">Stev Joni</h3>
          <div className="testimonial__position">Founder Apple</div>
          <div className="testimonial__description">
            <p>
              Nice work, Certificates National Association of Realtors (USA).
            </p>
          </div>
        </li>
        <li className="testimonial">
          <div className="testimonial__photo">
            <img
              src="./images/Layer-53.png"
              alt="Alisher Usmanov"
              title="Alisher Usmanov"
            />
          </div>
          <h3 className="testimonial__name">Alisher Usmanov</h3>
          <div className="testimonial__position">Ural Steel</div>
          <div className="testimonial__description">
            <p>
              My soul is illuminated by an unearthly joy, as these
              beautiful spring morning, which I enjoy with all my heart.
              <br />
              I\'m all alone and blissfully happy in the local edge.
              <br />
              as if created for the likes of me.
            </p>
          </div>
        </li>
        <li className="testimonial">
          <div className="testimonial__photo">
            <img
              src="./images/Layer-54.png"
              alt="Алексей Мордашов"
              title="Алексей Мордашов"
            />
          </div>
          <h3 className="testimonial__name">Алексей Мордашов</h3>
          <div className="testimonial__position">ГазПром</div>
          <div className="testimonial__description">
            <p>
              When my lovely valley of steam rises
              <br />
              and half-day sun is above an
              <br />
              impermeable. thicket
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Testimonials;
