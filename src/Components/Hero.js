import React from 'react';
import {Link} from 'react-scroll'


const Hero=()=>{

    return(
        <section name='home' className='hero'>
            <div className='hero-container'>
                <h1 className='hero-title'>John Tettis</h1>
                {/* <hr/> */}
                <p className='hero-caption'>
                    I am a full-stack web developer with a passion for small businesses and startups.
                </p>
                <Link className='hero-button' smooth={true}  duration={800} to='portfolio'>See my Work</Link>
            </div>
        </section>
    )
}

export default Hero