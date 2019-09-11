import React from 'react';
import './Gallery.scss';

const Gallery = () => (
  <section className="section gallery">
    <div className="container">
      <h2 className="section_title">
        Gallery
        <img src="images/decor.svg" alt="icon crown" />
      </h2>

      <div className="apart apart_mod-right">
        <div className="apart_photos">
          <div className="apart_photo" style={{ backgroundImage: 'url(images/first.png)' }} />
          <div className="apart_photo" style={{ backgroundImage: 'url(images/second.png)' }} />
        </div>
        <h2>
          Marina Palms /
          <span>North Miami Beach, FL 33162</span>
        </h2>
      </div>

      <div className="apart">
        <div className="apart_photos">
          <div className="apart_photo" style={{ backgroundImage: 'url(images/third.png)' }} />
          <div className="apart_photo" style={{ backgroundImage: 'url(images/fourth.png)' }} />
        </div>
        <h2>
          Edition Residens /
          <span>Miami Beach, FL 33139</span>
        </h2>
      </div>

      <div className="apart apart_mod-left">
        <div className="apart_photos">
          <div className="apart_photo" style={{ backgroundImage: 'url(images/fifth.png)' }} />
          <div className="apart_photo" style={{ backgroundImage: 'url(images/sixth.png)' }} />
        </div>
        <h2>
          Faena House /
          <span>Miami Beach, FL 33140</span>
        </h2>
      </div>
      <div className="section_bottom">
        <a href="#" className="button button_inline">View all</a>
      </div>
    </div>
  </section>
);

export default Gallery;
