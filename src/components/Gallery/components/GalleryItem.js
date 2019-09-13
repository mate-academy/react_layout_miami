import React from 'react';

function GalleryItem({
  imageWrapperClass1,
  imageWrapperClass2,
  imageSrc1,
  imageSrc2,
  imageAlt1,
  imageAlt2,
}) {
  return (
    <div className="gallery__item">
      <div className="gallery__images">
        <div className={imageWrapperClass1}>
          <img src={imageSrc1} alt="house" className="gallery__img" />
        </div>
        <div className={imageWrapperClass2}>
          <img src={imageSrc2} alt="house" className="gallery__img" />
        </div>
      </div>
      <p className="gallery__title">
        {' '}
        Marina Palms /
        {' '}
        <span className="gallery__adress">North Miami Beach, FL 33162</span>
      </p>
    </div>
  );
}

export default GalleryItem;
