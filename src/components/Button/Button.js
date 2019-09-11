import React from 'react';

import './Button.scss';

const Button = (props) => {
  const { btnName } = props;

  return (
    <button className="button" type="submit">{btnName}</button>
  );
};

export default Button;
