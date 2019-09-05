import React from 'react';

function Gallery() {
  return (
      <section className="section gallery">
        <div className="container container--gallery">
          <h2 className="section__title">
            Gallery
            <span className="section__title-image"></span>
          </h2>
          <div className="apart apart--mod-right">
            <div className="apart__photos">
              <div className="apart__photo">
                <img className="apart__photo-image" src="/images/apart__1.jpg" alt=""/>
              </div>
              <div className="apart__photo">
                <img className="apart__photo-image" src="/images/apart__2.jpg" alt=""/>
              </div>
            </div>
            <h2 className="apart__title">
              Marina Palms /
              <a href="https://www.google.com.ua/maps/place/%D0%9D%D0%BE%D1%80%D1%82+%D0%9C%D0%B0%D1%8F%D0%BC%D0%B8+%D0%91%D0%B8%D1%87,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0,+%D0%A1%D0%A8%D0%90/@25.9286284,-80.1868784,14z/data=!3m1!4b1!4m5!3m4!1s0x88d9adcf84c3bfe1:0x124edef8955c78e8!8m2!3d25.9331488!4d-80.1625463?hl=ru&authuser=0"
                 target="_blank"
                 rel="noopener">North Miami Beach, FL 33162</a>
            </h2>
          </div>
          <div className="apart">
            <div className="apart__photos">
              <div className="apart__photo">
                <img className="apart__photo-image" src="/images/apart__3.jpg" alt=""/>
              </div>
              <div className="apart__photo">
                <img className="apart__photo-image" src="/images/apart__4.jpg" alt=""/>
              </div>
            </div>
            <h2 className="apart__title">
              Edition Residens /
              <a href="https://www.google.com.ua/maps/place/%D0%9C%D0%B0%D0%B9%D0%B0%D0%BC%D0%B8-%D0%91%D0%B8%D1%87,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0,+%D0%A1%D0%A8%D0%90/@25.8102373,-80.1751609,13z/data=!3m1!4b1!4m5!3m4!1s0x88d9a6172bfeddb9:0x37be1741259463eb!8m2!3d25.790654!4d-80.1300455?hl=ru&authuser=0"
                 target="_blank"
                 rel="noopener">Miami Beach, FL 33139</a>
            </h2>
          </div>
          <div className="apart apart--mod-left">
            <div className="apart__photos">
              <div className="apart__photo">
                <img className="apart__photo-image" src="/images/apart__5.jpg" alt=""/>
              </div>
              <div className="apart__photo">
                <img className="apart__photo-image" src="/images/apart__6.jpg" alt=""/>
              </div>
            </div>
            <h2 className="apart__title">
              Faena House /
              <a href="https://www.google.com.ua/maps/place/%D0%9C%D0%B0%D0%B9%D0%B0%D0%BC%D0%B8-%D0%91%D0%B8%D1%87,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0,+%D0%A1%D0%A8%D0%90/@25.8102373,-80.1751609,13z/data=!3m1!4b1!4m5!3m4!1s0x88d9a6172bfeddb9:0x37be1741259463eb!8m2!3d25.790654!4d-80.1300455?hl=ru&authuser=0"
                 target="_blank"
                 rel="noopener">Miami Beach, FL 33140</a>
            </h2>
          </div>
          <div className="section__bottom">
            <a href="#" className="button button--inline">View all</a>
          </div>
        </div>
      </section>
  );
}

export default Gallery;
