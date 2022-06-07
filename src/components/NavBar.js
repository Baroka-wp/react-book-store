import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const NavBar = () => (
  <div className="navigation">
    <div className="topnav__bar">
      <div className="navlinks">
        <NavLink to="/" className="logo__text">Bookstore CMS</NavLink>
        <ul>
          <li><NavLink to="/">BOOKS</NavLink></li>
          <li><NavLink to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </div>
      <ImUser className="ImUser" />
    </div>
  </div>
);

export default NavBar;
