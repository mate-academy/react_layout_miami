import React from 'react';

import './About.scss';

const About = () => (
  <section className="section about__us" id="about-us">
    <div className="container container--about__us">
      <div className="promo">
        Miami
        <strong> best </strong>
        <br />
        Realry
        <span>— <br/>
          this
        </span>
      </div>
      <div className="about__us-content">
        <p className="about__us-history">
          <strong>Over 50 years experience in love.</strong><br/>Mazel and VA
          Tsukkerman in his
          "Analysis of musical works." Pointillism, which originated in the
          music of the early twentieth century, microforms, found a distant
          historical.
        </p>
        <ol className="about__us-list">
          <li className="list__item">
            The market leader in real estate since 2003
          </li>
          <li className="list__item">
            Awards Real Estate Company, 2010, 2011, 2013
          </li>
          <li className="list__item">
            More than 200 satisfied customers premium segment
          </li>
          <li className="list__item">
            We focus only on new buildings and high-level
            <br />
            doskanalno know this area better than other specialists.
          </li>
          <li className="list__item">
            Working directly with developers - so have more
            <br />
            useful information about the profitable deals
          </li>
        </ol>
        <p className="about__us-guaranty">
          We will never late!
          <br />
          Guaranteed secure transaction - 100%
        </p>
      </div>
    </div>
  </section>
);

export default About;
