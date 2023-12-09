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
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(Number(e.target.value))} />
      <button onClick={handleAddToCart}>Añadir al Carrito</button>
    </div>
  );
};

export default ItemDetail;
