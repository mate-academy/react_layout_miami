import React from 'react';
import './Best.scss';
import './Section.scss';

function Best() {
  return (
    <section className="section">
      <div className="container">
        <div className="best">
          <div className="best__motto">
            Miami
            <strong className="best_indent">
              best
            </strong>
            <div>
              Realry
            </div>
            <span>
              —
             this
            </span>
          </div>
          <div className="best__text textual">
            <p>
              <strong className="best__text_decor">
                Over 50 years experience in love.
              </strong>
              <br />
                Mazel and VA Tsukkerman in his `Analysis of musical works.`
                Pointillism, which originated in the music of the early
                twentieth century, microforms, found a distant historical.
            </p>
            <ol>
              <li>The market leader in real estate since 2003</li>
              <li>wards Real Estate Company, 2010, 2011, 2013</li>
              <li>More than 200 satisfied customers premium segment</li>
              <li>
                We focus only on new buildings and high-level
                doskanalno know this area better than other specialists.
              </li>
              <li>
                Working directly with developers - so have more
                useful information about the profitable deals
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
      </div>
    </section>
  );
}

export default Best;
