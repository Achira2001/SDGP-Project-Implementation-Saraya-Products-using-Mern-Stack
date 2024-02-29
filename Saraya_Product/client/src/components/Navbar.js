import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">Saraya Product</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sign In</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sign Up
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/admin">Admin</Link>
              <Link className="dropdown-item" to="/rider">Rider</Link>
              <Link className="dropdown-item" to="/lorry">Lorry</Link>
              <Link className="dropdown-item" to="/stores">Stores</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
