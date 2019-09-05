import React from 'react';
import '../App.scss';
import './Gallery.scss';

function Gallery() {
  return (
    <section className="gallery section">
      <div className="container">
        <h2 className="section__title">
          Gallery
          <span className="section__title--img"></span>
        </h2>

        <div className="apart">
          <div className="apart__photos apart__top">
            <div className="apart__photo apart__photo--top-left"></div>
            <div className="apart__photo apart__photo--top-right"></div>
          </div>
          <h2>
            Marina Palms /
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com.ua/maps/place
              /%D0%9D%D0%BE%D1%80%D1%82+%D0%9C%D0%B0%D1%8F%D0%B
              C%D0%B8+%D0%91%D0%B8%D1%87,+%D0%A4%D0%BB%D0%BE%D1%80
              %D0%B8%D0%B4%D0%B0+33162,+%D0%A1%D0%A8%D0%90/@25.91888
              15,-80.1786965,13.96z/data=!4m5!3m4!1s0x88d9addb1b65200
              1:0x525bd42381a2a4cf!8m2!3d25.9260794!4d-80.1819268"
              className="apart__map">
              North Miami Beach, FL 33162
            </a>
          </h2>
        </div>

        <div className="apart apart__center">
          <div className="apart__photos">
            <div className="apart__photo apart__photo--center-left"></div>
            <div className="apart__photo apart__photo--center-right"></div>
          </div>
          <h2>Marina Palms / <a
            href="https://www.google.com.ua/maps/place/%D0%9D%D0%BE%D1%80%D1%82+%D0%9C%D0%B0%D1%8F%D0%BC%D0%B8+%D0%91%D0%B8%D1%87,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0+33162,+%D0%A1%D0%A8%D0%90/@25.9188815,-80.1786965,13.96z/data=!4m5!3m4!1s0x88d9addb1b652001:0x525bd42381a2a4cf!8m2!3d25.9260794!4d-80.1819268"
            target="_blank" rel="noopener" className="apart__map">North Miami Beach, FL 33162</a></h2>
        </div>

        <div className="apart apart__bottom">
          <div className="apart__photos">
            <div className="apart__photo apart__photo--bottom-left"></div>
            <div className="apart__photo apart__photo--bottom-right"></div>
          </div>
          <h2>Marina Palms / <a
            href="https://www.google.com.ua/maps/place/%D0%9D%D0%BE%D1%80%D1%82+%D0%9C%D0%B0%D1%8F%D0%BC%D0%B8+%D0%91%D0%B8%D1%87,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0+33162,+%D0%A1%D0%A8%D0%90/@25.9188815,-80.1786965,13.96z/data=!4m5!3m4!1s0x88d9addb1b652001:0x525bd42381a2a4cf!8m2!3d25.9260794!4d-80.1819268"
            rel="noopener" target="_blank"
            className="apart__map">North Miami Beach, FL 33162</a></h2>
        </div>

        <div className="gallery__bottom">
          <a href="#" className="button button__inline">view all</a>
        </div>

      </div>
    </section>
  );
}

export default Gallery;
