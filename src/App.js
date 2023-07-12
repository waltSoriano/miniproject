import React from 'react';

import NavigationBar from './components/navBar';
import AboutUs from './components/about_us_section';
import Sponsors_Section from './components/sponsors';
import Footer from './components/footer';


const App =()=> {
  

  return (
    <>
    <div><NavigationBar/></div>
    <div><AboutUs/></div>
    <div><Sponsors_Section/></div>
    <div><Footer/></div>
    </>
   
  );
}

export default App;
