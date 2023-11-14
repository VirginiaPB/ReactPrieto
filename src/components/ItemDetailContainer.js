import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const fetchedItem = products.find(product => product.id.toString() === itemId);
      setItem(fetchedItem);
      setLoading(false);
    };

    fetchItem();
  }, [itemId]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!item) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <img src={item.pictureUrl} alt={item.title} style={{ maxWidth: '300px' }} />
      {}
    </div>
  );
};

export default ItemDetailContainer;
