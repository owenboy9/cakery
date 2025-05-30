import { useCart } from '../context/CartContext';
import '../styles/cart.css'; // Create this later for styling
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="every-page-container">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>your cart is empty</h2>
          <Link to="/products" className="go-shop">
          go shop!
          </Link>
        </div>
      ) : (
        <>
          <h1>your cart</h1>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button className="remove-button" onClick={() => removeFromCart(item.name)}>remove</button>
              </li>
            ))}
          </ul>

          <p className="cart-total">total: ${getTotal()}</p>
            <button onClick={clearCart} className="clear-cart-btn">empty cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
