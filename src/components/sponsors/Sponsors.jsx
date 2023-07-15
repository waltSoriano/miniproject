import React from 'react';
import './sponsors.css';
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import images from './images';


const Sponsors = () => {
  return (
    <div className="app2">
        <motion.div className="carousel">
            <motion.div className="inner-carousel">
                {images.map(image=>{
                    return(
                        <motion.div>
                            <img src={image} className='item' alt="" />
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    </div>
  )
};


export default Sponsors;