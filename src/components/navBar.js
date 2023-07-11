import React from 'react';
import './NavigationBar.css'; // Assuming you have a separate CSS file for additional styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Logo</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Destinations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Community</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;