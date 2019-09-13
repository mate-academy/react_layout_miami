import React from 'react';
import './Best.scss';

function Best() {
  return (
    <section className="section best">
      <div className="container best__flex-wrapper">
        <div className="best__moto">
          Miami
          <b>BEST</b>
          <br />
          Realry
          <span className="best__moto--color-primary">
            —
            <br />
            this
          </span>
        </div>
        <div className="best__text">
          <p className="best__subtitle">
            <strong>Over 50 years experience in love.</strong>
            <br />
            Mazel and VA Tsukkerman in his "Analysis of musical works."
            Pointillism, which originated in the music of the early twentieth
            century, microforms, found a distant historical.
          </p>
          <ol className="best__list">
            <li>The market leader in real estate since 2003</li>
            <li>Awards Real Estate Company, 2010, 2011, 2013</li>
            <li>More than 200 satisfied customers premium segment</li>
            <li>
              We focus only on new buildings and high-level doskanalno know this
              area better than other specialists.
            </li>
            <li>
              Working directly with developers - so have more useful information
              about the profitable deals
            </li>
          </ol>
          <p>
            <strong>
              We will never late!
              <br />
              Guaranteed secure transaction - 100%
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Best;
