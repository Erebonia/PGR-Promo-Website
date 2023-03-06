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
              <img className='fab fa-typo3' height = "75" width = "75" src="https://play-lh.googleusercontent.com/dmbws7bs3Ay8MnxTc22vbXMRBX11yqoqvFPQgkHQ0mHJEF8PwqLUf3aSj5aYHxUGEIQ" alt="" />
              <p>スレイヤー</p> 
          </Link>
            <div className = 'menu-icon' onClick = {handleClick}>
              <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className = 'nav-item'>
                <Link to = "/" className = 'nav-links' onClick={closeMobileMenu}> Home </Link>
              </li>
              <li className = 'nav-item'>
                <Link to = "/ppc" className = 'nav-links' onClick={closeMobileMenu}> Resources </Link>
              </li>
              <li className = 'nav-item'>
                <a href = "https://www.wikipedia.org/" target="_blank" className = 'nav-links' onClick={closeMobileMenu}> Wiki </a>
              </li>
              <li className = 'nav-item'>
              <a href = "https://discord.gg/slayerlegend" target="_blank" className = 'nav-links' onClick={closeMobileMenu}> Discord </a>
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
