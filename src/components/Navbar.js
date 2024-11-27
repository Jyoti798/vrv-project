import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">User Management</Link>
      <Link to="/permissions">C</Link>
    </div>
  );
};

export default Navbar;


