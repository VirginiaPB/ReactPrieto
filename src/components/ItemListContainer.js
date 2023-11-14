import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const filteredProducts = categoryId
      ? products.filter((product) => product.category === categoryId)
      : products;

    setItems(filteredProducts);
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <img src={item.pictureUrl} alt={item.title} style={{ maxWidth: '300px' }} />
          </div>
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
