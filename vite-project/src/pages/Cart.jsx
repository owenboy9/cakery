import { useCart } from '../context/CartContext';
import '../styles/cart.css'; // Create this later for styling
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Go shop!</Link></p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.name)}>remove</button>
              </li>
            ))}
          </ul>

          <p className="cart-total">Total: ${getTotal()}</p>
          <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
