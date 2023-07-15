import React from 'react'
import {RiMapPin2Line, RiArrowRightLine} from 'react-icons/ri'
import './home.css';
const Home = () => {
  return (
    <div className='container'>
      <div className="firstcolumn" id='equalpart'>
        <p className='p1'><RiMapPin2Line/> Boracay, Philippines</p>
        <h1>BORACAY ISLAND</h1>
        <p className='p2'>Boracay Island in the Philippines is a captivating tropical paradise known for its stunning white sandy beaches, clear waters, and vibrant nightlife. It offers diverse activities, accommodations, and experiences for all types of travelers, making it an unforgettable destination.</p>
        <p className="explore"><a href=""className='explore'>EXPLORE NOW! <RiArrowRightLine/></a></p>
        
      </div>
      <div className="secondcolumn" id='equalpart'>
        <div className="search">
            <input type="text" className="search-box" placeholder="Search tourist spots"/>
            <button className='search-button' type='submit'></button>
        </div>
        
      </div>
    </div>
  )
}

export default Home
