import React from 'react';

const SectionTestimonials = () => {
  return (
    <div className="section testimonials">
      <div className="container">
        <div className="section__title">
          Testimonials
          <img
            className="section__crown"
            src="/images/blue_crown.svg"
            alt="section title"
          />
        </div>

        <div className="testimonials__grid">
          <div className="testimonials__item">
            <img
              className="testimonials__photo"
              src="/images/testimonials/test_1.png"
              alt="person"
            />
            <p className="testimonials__person">
              Stev Joni
              <br />
              <span className="italic-text"> Founder Lucoil</span>
            </p>
            <p className="section__text">
              Nice work, Certificates National Association of Realtors (USA).
            </p>
          </div>
          <div className="testimonials__item">
            <img
              className="testimonials__photo"
              src="/images/testimonials/test_2.png"
              alt="person"
            />
            <p className="testimonials__person">
              Alisher Usmanov
              <br />
              <span className="italic-text">  Ural Steel </span>
            </p>
            <p className="section__text">
              My soul is illuminated by an unearthly joy, as these beautiful
              spring morning, which I enjoy with all my heart.
              <br />
              I'm all alone and blissfully happy in the local edge.
              <br />
              as if created for the likes of me.
            </p>
          </div>
          <div className="testimonials__item">
            <img
              className="testimonials__photo"
              src="/images/testimonials/test_3.png"
              alt="person"
            />
            <p className="testimonials__person">
              Алексей Мордашов
              <br />
              <span className="italic-text">ГазПром </span>
            </p>
            <p className="section__text">
              When my lovely valley of steam rises and half-day sun is above
              an impermeable. thicket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTestimonials;
