import React from 'react';
import './Gallery.scss';
import GalleryItem from './components/GalleryItem';
import CenterTitle from '../CenterTitle/CenterTitle';

import img1 from '../../images/gallery/gallery-1.png';
import img2 from '../../images/gallery/gallery-2.png';
import img3 from '../../images/gallery/gallery-3.png';
import img4 from '../../images/gallery/gallery-4.png';
import img5 from '../../images/gallery/gallery-5.png';
import img6 from '../../images/gallery/gallery-6.png';

function Gallery() {
  return (
    <section className="gallery">
      <CenterTitle title="Gallery" />
      <div className="container gallery__flex-wrapper">
        <GalleryItem
          imageWrapperClass1="gallery__image-wrapper-1"
          imageWrapperClass2="gallery__image-wrapper-2"
          imageSrc1={img1}
          imageSrc2={img2}
        />
        <GalleryItem
          imageWrapperClass1="gallery__image-wrapper-3"
          imageWrapperClass2="gallery__image-wrapper-4"
          imageSrc1={img3}
          imageSrc2={img5}
        />
        <GalleryItem
          imageWrapperClass1="gallery__image-wrapper-5"
          imageWrapperClass2="gallery__image-wrapper-6"
          imageSrc1={img6}
          imageSrc2={img4}
        />
        <div className="gallery__button-wrapper">
          <button type="button" className="button gallery__button">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
