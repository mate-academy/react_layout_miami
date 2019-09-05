import React from 'react';

function Testimonials() {
  return (
      <section className="section testimonials">
        <div className="container container--testimonials">
          <h2 className="section__title">
            Testimonials
            <span className="section__title-image"></span>
          </h2>
          <div className="testis">
            <div className="t">
              <div className="t__photo">
                <img className="t__photo-image" src="./images/person__1.jpg" alt=""/>
              </div>
              <h3 className="t__name">Stev Joni</h3>
              <div className="t__position">Founder Lucoil</div>
              <div className="t__description">
                <p>Nice work, Certificates National Association of Realtors (USA).</p>
              </div>
            </div>
            <div className="t">
              <div className="t__photo">
                <img className="t__photo-image" src="./images/person__2.jpg" alt=""/>
              </div>
              <h3 className="t__name">Alisher Usmanov</h3>
              <div className="t__position">Ural Steel</div>
              <div className="t__description">
                <p>My soul is illuminated by an unearthly joy, as these beautiful spring morning, which I enjoy with
                  all my
                  heart. I'm all alone and blissfully happy in the local edge. as if created for the likes of me.</p>
              </div>
            </div>
            <div className="t">
              <div className="t__photo">
                <img className="t__photo-image" src="./images/person__3.jpg" alt=""/>
              </div>
              <h3 className="t__name">Алексей Мордашов</h3>
              <div className="t__position">ГазПром</div>
              <div className="t__description">
                <p>When my lovely valley of steam rises and half-day sun is above an impermeable. thicket</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Testimonials;
