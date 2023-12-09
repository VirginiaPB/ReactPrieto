import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
  
  };

  const removeFromCart = (itemId) => {
    
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemsCount = cart.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};
