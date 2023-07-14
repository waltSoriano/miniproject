import React from 'react'
import {RiMapPin2Line} from 'react-icons/ri'
import './home.css';
const Home = () => {
  return (
    <div className='container'>
      <div className="firstcolumn" id='equalpart'>
        <p className='p1'><RiMapPin2Line/> Boracay, Philippines</p>
        <h1>BORACAY ISLAND</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, dolore! Totam atque ducimus molestiae aspernatur quos pariatur nihil nostrum suscipit! Ab, ipsam impedit perferendis mollitia dolore eligendi beatae praesentium eos!</p>
        <p className="explore">EXPLORE</p>
      </div>
      <div className="secondcolumn" id='equalpart'>cards</div>
    </div>
  )
}

export default Home
