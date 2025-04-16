// src/components/Header.jsx

import Nav from './Nav.jsx'
import logo from '../assets/logo.jpg'
import '../styles/headerAndFooter.css'

function Header() {
  return (
    <header>
    <div className='header-container'>
      <a href="/">
        <div className='logo-container'>
          <img className='logo' src={logo}/>
        </div>
      </a>
      <Nav />
    </div>
    </header>
  );
}

export default Header;
