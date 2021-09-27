import React, {useRef} from 'react';
import {Link } from "react-scroll";
import hamburger from '../Images/hamburger.svg'

const NavBar= ()=>{

    return(
        <>
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-list-item'>
                    <Link spy={true} smooth={true}  duration={800} activeClass='active' to='home'>Home</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link spy={true} smooth={true}  duration={800} activeClass='active' to='About'>About</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link spy={true} smooth={true}  duration={800} activeClass='active' to='ortfolio'>Portfolio</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link spy={true} smooth={true}  duration={800} activeClass='active' to='contact'>Contact</Link>
                </li>
            </ul>
            <img className='hamburger' src={hamburger}></img>

        </nav>
        </>
    )

}

export default NavBar