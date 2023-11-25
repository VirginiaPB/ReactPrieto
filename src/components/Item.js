import React from 'react';

const ItemDetail = ({ item }) => {
  if (!item) {
    return <p>Producto no seleccionado</p>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <img src={item.pictureUrl} alt={item.title} style={{ maxWidth: '300px' }} />
    </div>
  );
};

export default ItemDetail;
