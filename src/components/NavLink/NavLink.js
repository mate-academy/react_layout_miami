import React from 'react';
import './NavLink.scss';

const NavLink = (props) => {
  return (
    props.navItem.map(item =>
      <li><a href={item.href} className="header__link">{item.name}</a></li>
    )
  );
};

export default NavLink;
