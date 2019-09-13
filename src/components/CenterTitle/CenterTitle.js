import React from 'react';
import './CenterTitle.scss';

import centerTitleIcon from '../../images/icons/title-icon.png';

function CenterTitle({ title }) {
  return (
    <div className="center-titles">
      <div className="center-titles__title-wrapper">
        <div className="center-titles__title">{title}</div>
      </div>
      <div className="center-titles__icon">
        <img
          src={centerTitleIcon}
          className="center-titles__img"
          alt="label char"
        />
      </div>
    </div>
  );
}

export default CenterTitle;
