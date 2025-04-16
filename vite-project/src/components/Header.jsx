// src/components/Header.jsx
import backgroundImage from '../assets/background.jpg';

import Nav from './Nav.jsx'
import logo from '../assets/logo.jpg'
import '../styles/headerAndFooter.css'

function Header() {
  return (
    <header style={{ backgroundColor: '#f8c8dc', 
    padding: '1rem'}}>
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
