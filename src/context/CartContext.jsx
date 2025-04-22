import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const numericQuantity = Number(quantity);
    const numericPrice = Number(product.price);

    setCartItems(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + numericQuantity }
            : item
        );
      } else {
        return [
          ...prev,
          {
            ...product,
            quantity: numericQuantity,
            price: numericPrice, // ensure numeric
          },
        ];
      }
    });
  };

  const removeFromCart = (name) => {
    setCartItems(prev => prev.filter(item => item.name !== name));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (name, quantity) => {
    const num = Number(quantity);
    if (!isNaN(num) && num > 0) {
      setCartItems(prev =>
        prev.map(item =>
          item.name === name ? { ...item, quantity: num } : item
        )
      );
    }
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
