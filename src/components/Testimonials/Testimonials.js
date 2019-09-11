import React from 'react';
import './Testimonials.scss';

const Testimonials = () => (
  <section className="section testimonials">
    <div className="container">
      <h2 className="section_title">
        Testimonials
        <img src="images/decor.svg" alt="icon crown" />
      </h2>
      <div className="testis">
        <div className="testi">
          <div className="testi-item">
            <div
              className="testi_photo"
              style={{ backgroundImage: 'url(images/stevJoni.png)' }}
            />
            <h3 className="testi_name">Stev Joni</h3>
            <div className="testi_position">Founder Lucoil</div>
            <div className="testi_description">
              <p>
                Nice work, Certificates National Association of Realtors (USA).
              </p>
            </div>
          </div>
        </div>

        <div className="testi">
          <div className="testi-item">
            <div
              className="testi_photo"
              style={{ backgroundImage: 'url(images/alisherUsmanov.png)' }}
            />
            <h3 className="testi_name">Stev Joni</h3>
            <div className="testi_position">Founder Lucoil</div>
            <div className="testi_description">
              <p>
                Nice work, Certificates National Association of Realtors (USA).
              </p>
            </div>
          </div>
        </div>

        <div className="testi">
          <div className="testi-item">
            <div
              className="testi_photo"
              style={{ backgroundImage: 'url(images/alekseyMordashov.png)' }}
            />
            <h3 className="testi_name">Stev Joni</h3>
            <div className="testi_position">Founder Lucoil</div>
            <div className="testi_description">
              <p>
                Nice work, Certificates National Association of Realtors (USA).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
