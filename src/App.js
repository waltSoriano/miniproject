import React from 'react';

import NavigationBar from './components/navBar';
import AboutUs from './components/about_us_section';
import Sponsors_Section from './components/sponsors';
import Footer from './components/footer';
import Home from './components/home';


const App =()=> {
  

  return (
    <>
    <div><NavigationBar/></div>
    <div><Home/></div>
    <div><AboutUs/></div>
    <div><Sponsors_Section/></div>
    <div><Footer/></div>
    </>
   
  );
}

export default App;
