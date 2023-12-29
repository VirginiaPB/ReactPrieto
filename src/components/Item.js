import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 

const Item = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item, 1); 
  };

  return (
    <div className="item">
      {item && item.pictureUrl && <img src={item.pictureUrl} alt={item.title} />}
      <h3>{item && item.title}</h3>
      <p>{item && item.description}</p>
      <p>${item && item.price}</p>
      <button onClick={handleAddToCart}>Añadir al Carrito</button>
    </div>
  );
};

export default Item;
