import React, {useState, useEffect}from 'react'
import {Link} from 'react-scroll'
import arrow from '../Images/left-arrow.svg'

const FlyOutMenu = ({show, toggleMenu})=>{
    let visible = show ? 'show':'hide';
    let [arrowLeft, setArrowLeft] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setArrowLeft(!show)
        },1000)
    },[show])

    let arrowClass= `flyout-list-arrow ${arrowLeft ? 'left' : 'right'}`

    return(
        <div id="fly-out-menu" className={visible}>
             <ul className='flyout-list'>
                <li className='flyout-list-item'>
                    <Link spy={true} smooth={true} onClick={toggleMenu}  duration={800} activeClass='active' to='home'>Home</Link>
                </li>
                <li className='flyout-list-item'>
                    <Link spy={true} smooth={true} onClick={toggleMenu}  duration={800} activeClass='active' to='about'>About</Link>
                </li>
                <li className='flyout-list-item'>
                    <Link spy={true} smooth={true} onClick={toggleMenu}  duration={800} activeClass='active' to='portfolio'>Portfolio</Link>
                </li>
                <li className='flyout-list-item'>
                    <Link spy={true} smooth={true} onClick={toggleMenu}  duration={800} activeClass='active' to='contact'>Contact</Link>
                </li>
            </ul>
            <div tabIndex='1' onClick={toggleMenu}className='flyout-list-arrow-container'>
                <img src={arrow} className={arrowClass}></img>
            </div>
        </div>
    )
}

export default FlyOutMenu