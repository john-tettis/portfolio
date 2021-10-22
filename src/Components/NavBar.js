import React, {useRef,useState} from 'react';
import {Link } from "react-scroll";
import hamburger from '../Images/hamburger.svg'
import useScroll from './Hooks/useScroll'

const NavBar= ({toggleMenu})=>{
    let [opacity, setOpacity] = useState('')
        useScroll(setOpacity,120,'opacity','')
    return(
        <>
        <nav className={`navbar ${opacity}`}>
            <ul className='navbar-list'>
                <li className='navbar-list-item'>
                    <Link spy={true} smooth={true}  duration={800} activeClass='active' to='home'>Home</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link spy={true} smooth={true}  duration={800} activeClass='active' to='about'>About</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link spy={true} smooth={true}  duration={800} activeClass='active' to='portfolio'>Portfolio</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link spy={true} smooth={true}  duration={800} activeClass='active' to='contact'>Contact</Link>
                </li>
            </ul>
            <img onClick={toggleMenu} className='hamburger' src={hamburger}></img>

        </nav>
        </>
    )

}

export default NavBar