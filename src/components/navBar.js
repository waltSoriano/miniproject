import React from 'react';
import './NavigationBar.css'; // Assuming you have a separate CSS file for additional styling


function NavigationBar() {
  return (
    <nav>
        <div className="left">
            <img src="" alt="LOGO" />
            <h2 className="brand_name"></h2>
        </div>
        <div className="middle">
            <ul>
            <a href=""><li>Home</li></a>
            <a href=""><li>Destinations</li></a>
            <a href=""><li>Community</li></a>
            <a href=""><li>About Us</li></a>
            </ul>
        </div>
        <div className="right">
            <ul>
            <a href=""><li>Sign Up</li></a>
            <a href=""><li>Log In</li></a>
            </ul>
        </div>
    </nav>
  );
}

export default NavigationBar;