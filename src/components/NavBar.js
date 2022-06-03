import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navigation">
    <div className="topnav__bar">
      <NavLink to="/" className="logo__text">Bookstore CMS</NavLink>
      <ul>
        <li><NavLink to="/">Books</NavLink></li>
        <li><NavLink to="/categories">Categories</NavLink></li>
      </ul>
    </div>
  </div>
);

export default NavBar;
