import React from 'react';
import './Description.scss';

const Description = () => (
  <section className="section description">
    <div className="container">
      <div className="best_motto">
        Miami
        <strong>best</strong>
        <br />
        Rearly
        <span>
          -
          <br />
          this
        </span>
      </div>
      <div className="best_text textual">
        <p>
          <strong>Over 50 years experience in love.</strong>
          <br />
          Mazel and VA Tsukkerman in his "Analysis of musical works."
          Pointillism, which originated in the music of the early twentieth century,
          microforms, found a distant historical.
        </p>
        <ol className="textual_descr">
          <li>The market leader in real estate since 2003</li>
          <li>Awards Real Estate Company, 2010, 2011, 2013</li>
          <li>More than 200 satisfied customers premium segment</li>
          <li>
            We focus only on new buildings and high-level
            doskonalno know this area better than other specialists
          </li>
          <li>
            Working directly with developers - so have more
            useful information about the profitable deals
          </li>
        </ol>
        <p>
          <strong>We will never late!</strong>
          <br />
          Guaranteed secure transaction - 100%
        </p>
      </div>
    </div>
  </section>
);

export default Description;
