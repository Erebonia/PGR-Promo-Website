import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => { // When the screen gets too small it will toggle and resize button
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
  <>
  <nav className ="navbar">
      <div className = "navbar-container">
          <Link to = "/" className = "navbar-logo" onClick={closeMobileMenu}>
              <img className='fab fa-typo3' src="https://cdn.discordapp.com/emojis/884098838263103548.webp?size=56&quality=lossless" alt="" />
              <p>満月</p> 
              <p>Mangetsu</p>
              
          </Link>
            <div className = 'menu-icon' onClick = {handleClick}>
              <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'nav-item'>
                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}> Home </Link>
              </li>
              <li className = 'nav-item'>
                <Link to = "/services" className = 'nav-links' onClick={closeMobileMenu}> Pain Cage </Link>
              </li>
              <li className = 'nav-item'>
                <Link to = "/products" className = 'nav-links' onClick={closeMobileMenu}> Contact </Link>
              </li>
              <li className = 'nav-item'>
                <Link to = "/sign-up" className = 'nav-links-mobile' onClick={closeMobileMenu}> Sign Up </Link>
              </li>
            </ul>
            {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
      </div> 
  </nav>
  </>

  );
}

export default Navbar;
