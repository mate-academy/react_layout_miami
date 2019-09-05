import React from 'react';

import './Gallery.scss';

const Gallery = () => (
  <section className="section gallery" id="gallery">
    <div className="container container--gallery">
      <h2 className="section__title">
        gallery
      </h2>
      <div className="apart apart-mod-left">
        <div className="apart__photo">
          <a href="#">
            <img
              src="../../../../images/Layer-46.png"
              alt="Marina Palms apartment"
            />
          </a>
        </div>
        <div className="apart__photo">
          <a href="#">
            <img
              src="../../../../images/Layer-47.png"
              alt="Marina Palms apartment"
            />
          </a>
        </div>
        <h3 className="apart__name">
          Marina Palms /
          <span> North Miami Beach, FL 33162</span>
        </h3>
      </div>
      <div className="apart apart-mod-center">
        <div className="apart__photo">
          <a href="#">
            <img
              src="../../../../images/Layer48.png"
              alt="Edition Residens"
            />
          </a>
        </div>
        <div className="apart__photo">
          <a href="#">
            <img
              src="../../../../images/Layer50.png"
              alt="Edition Residens"
            />
          </a>
        </div>
        <h3 className="apart__name">
          Edition Residens /
          <span> Miami Beach, FL 33139</span>
        </h3>
      </div>
      <div className="apart apart-mod-right">
        <div className="apart__photo">
          <a href="#">
            <img
              src="../../../../images/Layer51.png"
              alt="Faena House"
            />
          </a>
        </div>
        <div className="apart__photo">
          <a href="#">
            <img
              src="../../../../images/Layer49.png"
              alt="Faena House"
            />
          </a>
        </div>
        <h3 className="apart__name">
          Faena House /
          <span> Beach, FL 33140</span>
        </h3>
      </div>
      <a href="#" className="button button__inline">view all</a>
    </div>
  </section>
);

export default Gallery;
