import React from 'react'
import Photo from '../photos/logo.jpg'
const AboutUs = ()=>{
    return(
        <>
        <div className="container_abou_us">
            <div className="image_logo">
                <img src={Photo} alt="" />
            </div>
            <div className="introtitlemore_info">
                <h2 className="introtitle">Intro Title</h2>
                <p className="more_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsum porro. Placeat quis reiciendis minima quia vitae atque ex reprehenderit sequi? Fugiat quisquam neque maiores ducimus dolorum eaque amet. Aperiam.</p>
            </div>

            
        </div>
        </>
    );
        
}

export default AboutUs