import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo/Logo.png'; // Make sure the path to your logo is correct

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Saraya Product Logo" style={{ width: 'auto', height: '100px' }} />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sign Up
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/admin">Admin</Link>
              <Link className="dropdown-item" to="/rider">Rider</Link>
              <Link className="dropdown-item" to="/lorry">Lorry</Link>
              <Link className="dropdown-item" to="/stores">Stores</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
