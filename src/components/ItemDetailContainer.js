import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ItemDetail from './ItemDetail'; 

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null); 
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

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
