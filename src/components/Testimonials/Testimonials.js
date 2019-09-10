import React from 'react';
import './Testimonials.scss';
import './Section.scss';

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section__title">
          Testimonials
          <span className="section__title--img"> </span>
        </h2>

        <div className="testis">
          <div className="t">
            <div className="t__photo t__photo_1"> </div>
            <div className="t__name">Steve Jobs</div>
            <div className="t__position">Founder Lucoil</div>
            <div className="t__descr">
              <p>
              Nice work, Certificates National Association of Realtors
              (USA).
              </p>
            </div>
          </div>

          <div className="t">
            <div className="t__photo t__photo_2"> </div>
            <div className="t__name">Alisher Usmanov</div>
            <div className="t__position">Ural Steel</div>
            <div className="t__descr">
              <p>
                My soul is illuminated by an unearthly joy,
                as these beautiful spring morning,
                which I enjoy with all my heart. I&apos;m
                all alone and blissfully happy in the local edge.
                as if created for the likes of me.
              </p>
            </div>
          </div>

          <div className="t">
            <div className="t__photo t__photo_3"> </div>
            <div className="t__name">Алексей Мордашов</div>
            <div className="t__position">ГазПром</div>
            <div className="t__descr">
              <p>
                When my lovely valley of steam rises and half-day sun
                is above an impermeable. thicket
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
