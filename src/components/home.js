import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>
      <div className='background'>
        <section className='section-container'>
          <div className='search-container'>
            <form id="search-form">
              <input type="text" id="search-input" placeholder="Search Places..." />
              <button type="submit">Search</button>
            </form>
          </div>
        </section>
        <section className='section-container2'>
          <div className="div1" id="box">
            <h5 className="location">Boracay, Philippines</h5>
            <h1 className="place">Boracay Island</h1>
            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, alias nostrum provident reiciendis eaque, fugit sit vel vero et consectetur ab fuga at, sunt rerum deleniti commodi. Soluta, ipsa rem.</p>
            <div className="explore-bookmark">
              <button className="explore">Explore</button>
              <p>bookmark-icon</p>
            </div>
          </div>
          <div className="div2" id="box">photo cards</div>
        </section>
      </div>
    </>
  );
};

export default Home;