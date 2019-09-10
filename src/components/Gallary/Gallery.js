import React from 'react';
import './Apart.scss';
import './Section.scss';

function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <h2 className="section__title">
          Gallery
          <span className="section__title--img"> </span>
        </h2>

        <div className="apart">
          <div className="apart__photos apart_mod-right">
            <div className="apart__photo apart__photo_1"> </div>
            <div className="apart__photo apart__photo_2"> </div>
          </div>
          <h2>
            Marina Palms /
            <a
              className="link__decor"
              href="https://www.google.com/maps/place/
              Норт-Маямі-Біч,+Флорида+33162,
              +Сполучені+Штати+Америки/@25.9289247,-80.2148991,13z/
              data=!3m1!4b1!4m5!3m4!1s0x88d9addb1b652001
              :0x525bd42381a2a4cf!8m2!3d25.9260794!4d-80.1819268"
            >
              <span>North Miami Beach, FL 33162</span>
            </a>
          </h2>
        </div>

        <div className="apart">
          <div className="apart__photos">
            <div className="apart__photo apart__photo_3"> </div>
            <div className="apart__photo apart__photo_4"> </div>
          </div>
          <h2>
            Edition Residens /
            <a
              className="link__decor"
              href="https://www.google.com/maps/place/
              %D0%9C%D0%B0%D1%8F%D0%BC%D1%96-%D0%91%D1%96%D1%87,
              +%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0+33139,
              +%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%
              D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B
              8%D0%BA%D0%B8/@25.7819816,-80.1729086,14z/data=!3m1!4b1!4m5!
              3m4!1s0x88d9b4661cbb1ae5:0x557bd4f5339da98e!8m2!3d25.783312!4d-
              80.1484407"
            >
              <span>Miami Beach, FL 33139</span>
            </a>
          </h2>
        </div>

        <div className="apart">
          <div className="apart__photos apart_mod-left">
            <div className="apart__photo apart__photo_5"> </div>
            <div className="apart__photo apart__photo_6"> </div>
          </div>
          <h2>
            Faena House /
            <a
              className="link__decor"
              href="https://www.google.com/maps/place/%D0%9C%D0%
              B0%D1%8F%D0%BC%D1%96-%D0%91%D1%96%D1%87,+
              %D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B
              0+33140,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1
              %87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1
              %82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%
              BA%D0%B8/@25.823236,-80.1828291,13z/data=!3m1!4b1!4m5!
              3m4!1s0x88d9b36dc0de02e1:0x57754e79a3d46a91!8m2!3d25.
              8176795!4d-80.1372757"
            >
              <span>Miami Beach, FL 33140</span>
            </a>
          </h2>
        </div>

        <div className="section__bottom">
          <a
            href="https://www.google.com/search?q=miami&rlz=1C1SQJL_enUA856UA856
            &sxsrf=ACYBGNTLjn-8wvDKUrCJnJMFHmnaEqv63g:1567696857539&source=l
            nms&tbm=isch&sa=X&ved=0ahUKEwj3jLzy_bnkAhUF-yoKHU5XCuUQ_AUIEigB"
            className="button button-inline"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
