// src/components/Footer.jsx
import instagramlogo from '../assets/instagram-logo.png';
import facebooklogo from '../assets/facebook-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <a 
        href="https://www.instagram.com/__.sweet_.shop/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img className='social-logo' src={instagramlogo} alt="instagram" />
      </a>
      <a 
        href="https://www.facebook.com/groups/854444501602813" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img className='social-logo' src={facebooklogo} alt="facebook" />
      </a>
      <p>© 2025 sweet shop</p>
    </footer>
  );
}

export default Footer;
