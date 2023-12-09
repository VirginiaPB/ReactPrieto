import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 

const Item = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item, 1); 
  };

  return (
    <div className="item">
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={handleAddToCart}>Añadir al Carrito</button>
    </div>
  );
};

export default Item;
