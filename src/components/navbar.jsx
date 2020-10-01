import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Stateless functional component
const NavBar = (props) => {
  console.log('Navbar - rendered');

  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </Link>
      <Link to="/about">
        <li>About </li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </nav>
  );
};

export default NavBar;
