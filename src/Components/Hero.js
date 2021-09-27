import React from 'react';
import image from '../Images/Hero.svg'


const Hero=()=>{

    return(
        <section name='home' className='hero'>
            <h1 className='hero-title'>John Tettis</h1>
            <p className='hero-caption'>
                I am a full-stack web developer with a passion for small businesses and startups.
            </p>
            <button className='hero-button'>See my work</button>
        </section>
    )
}

export default Hero