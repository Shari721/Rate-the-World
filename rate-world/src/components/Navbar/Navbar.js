import React from "react";
import "./Navbar.css";

const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light  bg-light">
      <Link className="navbar-brand" to="/">Home</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/1">Browser</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/2">Your Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/3">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/4">Sign-up</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navbar;
