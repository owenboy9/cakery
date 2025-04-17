// src/components/Header.jsx

import Nav from './Nav.jsx'
import logo from '../assets/logo.jpg'
import '../styles/headerAndFooter.css'

function Header() {
  return (
    <header>
    <div className='header-container'>
      <div className='logo-container'>
        <a href="/">
          <img className='logo' src={logo}/>
        </a>
      </div>
      <Nav />
    </div>
    </header>
  );
}

export default Header;
