import React from 'react';
import image from '../Images/me.JPG'
import '../Styles/About.css'
import ThemeScroller from './ThemeScroller'
export default function About(){



    return(
        <section name='about' className='about'>
            <h2 className='about-title'>About Me</h2>
            
            <hr className='line'/>
            <div className='about-container'>
                <img className='about-img'src={image}></img>
                <p className='text-light'>I am a full stack javascript developer, based in Northern Pennsylvania.</p>
                <p className='text-lead'>My passion lies in creating effective, beautiful solutions to complex problems.</p>
            </div>
            <ThemeScroller/>
            

        </section>
    )
}