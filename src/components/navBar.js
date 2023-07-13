import React from 'react';
import './NavigationBar.css'; // Assuming you have a separate CSS file for additional styling
import Logo from '../photos/logo.jpg'

function NavigationBar() {
  return (
    <nav>
        <div className="left" id="parts">
            <img src={Logo} alt="LOGO" className='logo'/>
            <h2 className="brand_name">ENVIRO QUEST</h2>
        </div>
        <div className="middle" id="parts">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Destinations</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">About Us</a></li>
            
            </ul>
        </div>
        <div className="right" id="parts">
            <ul>
            <a href=""><li className='sign'>Sign Up</li></a>
            <a href=""><li className='log'>Log In</li></a>
            </ul>
        </div>
    </nav>
  );
}

export default NavigationBar;