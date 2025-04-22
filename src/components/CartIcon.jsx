import { useCart } from '../context/CartContext';
import cart from '../assets/basket.png';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

function CartIcon() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="floating-cart">
      <Link to="/cart">
        <img src={cart} alt="Shopping Cart" className="cart-icon" />
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </Link>
    </div>
  );
}

export default CartIcon;
