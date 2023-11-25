import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { products } from '../data/products';
import Item from './Item'; 

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (categoryId) {
      const filteredProducts = products.filter(product => product.category === categoryId);
      setItems(filteredProducts);
    } else {
      setItems([]);
    }
  }, [categoryId]);

  if (location.pathname === '/') {
    return <img src={`${process.env.PUBLIC_URL}/fotoPpial.jpeg`} alt="Imagen principal" />;
  } else {
    return (
      <div>
        <h2>{greeting}</h2>
        {items.length > 0 ? (
          items.map((item) => (
            <Item key={item.id} item={item} /> 
          ))
        ) : (
          <p>No hay productos en esta categoría.</p>
        )}
      </div>
    );
  }
};

export default ItemListContainer;
