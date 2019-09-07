import React from 'react';
import './Nav.scss';
import NavLink from '../NavLink/NavLink';


const navItem = [
  {
    name: 'Home', href: '/',
  },
  {
    name: 'About Us', href: '/',
  },
  {
    name: 'gallery', href: '/',
  },
  {
    name: 'consultation', href: '/',
  },
  {
    name: 'testimonials', href: '/',
  },
  {
    name: 'Contacts', href: '/',
  },
];

const Nav = () => {
  return (
    <ul className="nav">
      <NavLink navItem={navItem} />
    </ul>
  );
};

export default Nav;
