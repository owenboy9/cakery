import { useCart } from '../context/CartContext';  // Import the useCart hook
import Nav from './Nav.jsx';
import logo from '../assets/logo.jpg';
import '../styles/headerAndFooter.css';
import { Link } from 'react-router-dom'; 

function Header() {
  const { cartItems } = useCart();  // Access the cart items from context
  
  // Calculate total number of items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
