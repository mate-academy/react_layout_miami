import React from 'react';

const SectionGallery = () => {
  return (
    <div className="section gallery">
      <div className="container">
        <div className="section__title">
          Gallery
          <img
            className="section__crown"
            src="images/blue_crown.svg"
            alt="section title"
          />
        </div>
        <div className="hause hause--right">
          <div className="hause__photo">
            <img
              src="images/gallery/hause_1_1.png"
              alt="hause"
            />
          </div>
          <div className="hause__photo">
            <img
              src="images/gallery/hause_1_2.png"
              alt="hause"
            />
          </div>
          <h2 className="hause__title">
            Marina Palms /
            <a href="/" className="hause__link">Miami Beach, FL 33162</a>
          </h2>
        </div>
        <div className="hause hause--center">
          <div className="hause__photo">
            <img src="images/gallery/hause_2_1.png" alt="hause" />
          </div>
          <div className="hause__photo">
            <img src="images/gallery/hause_2_2.png" alt="hause" />
          </div>
          <h2 className="hause__title">
            Marina Palms /
            <a href="/" className="hause__link">Miami Beach, FL 33162</a>
          </h2>
        </div>
        <div className="hause hause--left">
          <div className="hause__photo">
            <img src="/images/gallery/hause_3_1.png" alt="hause" />
          </div>
          <div className="hause__photo">
            <img src="images/gallery/hause_3_2.png" alt="hause" />
          </div>
          <h2 className="hause__title">
            Marina Palms /
            <a href="/" className="hause__link">Miami Beach, FL 33162</a>
          </h2>
        </div>
        <a href="/" className="button button--inline">View all</a>
      </div>
    </div>
  );
};

export default SectionGallery;
