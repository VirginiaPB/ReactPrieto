import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; 

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  return (
    <div className="item-detail">
      {item && item.pictureUrl && <img src={item.pictureUrl} alt={item.title} />}
      <h2>{item && item.title}</h2>
      <p>{item && item.description}</p>
      <p>Precio: ${item && item.price}</p>
      <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(Number(e.target.value))} />
      <button onClick={handleAddToCart}>Añadir al Carrito</button>
    </div>
  );
};

export default ItemDetail;
