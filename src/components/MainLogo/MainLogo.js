import React from 'react';
import mainLogo from '../../images/main-logo.png';

import './MainLogo.scss';

function MainLogo({ additionalClass }) {
  return (
    <div className={`main-logo ${additionalClass}`}>
      <a href="/" className="main-logo__link">
        <img src={mainLogo} alt="miami logo" className="main-logo__img" />
      </a>
    </div>
  );
}

export default MainLogo;
