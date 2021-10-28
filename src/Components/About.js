import React from 'react';
import image from '../Images/me.JPG'
import '../Styles/About.css'
import express from '../Images/expressjs.svg'
import '../Styles/About.css'



export default function About(){



    return(
        <section name='about' className='about'>
            <div className='about-top'>
                 <h2 className='about-title'>About Me</h2>
                <div className='about-container'>
                    <div className='about-container-inner'>
                        <img className='about-img' src={image}></img>
                        <p className='about-text'>I am a full stack web developer, specializing in react and express web applications. </p>
                        <p className='about-text'>My passion lies in creating effective, beautiful products for small businesses and startups.</p>
                     </div>   
                </div>
                <div className='about-container-inner'>
                  

                </div>
            </div>
            <div className='about-bottom'>
                <h4>My Tech Stack</h4>
                <div className='about-icon-container'>
                        <i className="fab fa-node-js fa-4x about-icon"></i>
                        <i className="fab fa-react fa-4x about-icon"></i>
                        <div className='about-icon img'>
                            <img src={express}></img>
                        </div>
                    </div>
            </div>
        </section>
    )
}