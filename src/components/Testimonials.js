import React from 'react';
import './Testimonials.scss';

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section__title">
          Testimonials
          <span className="section__title--img" />
        </h2>

        <div className="testimonials__wrapper">
          <div className="testimonials__person">
            <div className="testimonials__person--photo photo-1" />

            <h3 className="testimonials__person--name">Алексей Мордашов</h3>

            <div className="testimonials__person--position">ГазПром</div>

            <div className="testimonials__person--description">
              <p>
                When my lovely valley of steam
                rises and half-day sun is above an impermeable. thicket
              </p>
            </div>
          </div>

          <div className="testimonials__person">
            <div className="testimonials__person--photo photo-2" />

            <h3 className="testimonials__person--name">Alisher Usmanov</h3>

            <div className="testimonials__person--position">Ural Steel</div>

            <div className="testimonials__person--description">
              <p>
                My soul is illuminated by an unearthly joy,
                as these beautiful spring morning, which I
                enjoy with all my heart. I&quot;m all alone and
                blissfully happy in the local edge. As if created
                for the likes of me.
              </p>
            </div>
          </div>

          <div className="testimonials__person">
            <div className="testimonials__person--photo photo-3" />

            <h3 className="testimonials__person--name">Stev Joni</h3>

            <div className="testimonials__person--position">Founder Lucoil</div>

            <div className="testimonials__person--description">
              <p>
                Nice work, Certificates National Association of Realtors (USA).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
