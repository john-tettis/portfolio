import '../Styles/App.css';
import NavBar from './NavBar'
import Hero from './Hero'
import Portfolio from './PortfolioParts/Portfolio'
import React, {useState}from 'react'
import FlyOutMenu from './FlyOutMenu'
import About from './About'

function App() {
  
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu=()=>{
    setShowMenu(!showMenu)
  }
  return (
    <>
      <NavBar toggleMenu={toggleMenu}/>
      <Hero/>
      <Portfolio/>
      <About/>
      <FlyOutMenu show={showMenu} toggleMenu={toggleMenu}/>
      
    </>
  );
}

export default App;
