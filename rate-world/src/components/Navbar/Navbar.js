import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
<ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/user:id"
        className={
          window.location.pathname === "/user:id" ? "nav-link active" : "nav-link"
        }
      >
        Profile
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/browse"
        className={
          window.location.pathname === "/browse" ? "nav-link active" : "nav-link"
        }
      >
        Browse
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/signup"
        className={
          window.location.pathname === "/signup" ? "nav-link active" : "nav-link"
        }
      >
        SignUp
      </Link>
    </li>
  </ul>
);

 
export default Navbar;

// 
// <nav className="navbar navbar-inverse navbar-top">
//     <div className="container-fluid">
//       <div className="navbar-header">
//         <button type="button" className="collapsed navbar-toggle">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar" /> <span className="icon-bar" />
//           <span className="icon-bar" />
//         </button>
//         <a href="/" className="navbar-brand">
//           Rate-the-World
//         </a>
//         <ul>
//           <li><Link to="/user:id">Login</Link></li>
//         </ul>
//         <ul>
//           <li><Link to="/browse">Browse Items</Link></li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );
