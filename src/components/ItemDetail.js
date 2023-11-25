import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <img src={item.pictureUrl} alt={item.title} style={{ maxWidth: '300px' }} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Material: {item.material}</p>
    </div>
  );
};

export default ItemDetail;
