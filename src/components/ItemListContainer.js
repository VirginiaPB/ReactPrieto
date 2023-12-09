import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { db } from '../firebase-config';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productCollection = db.collection('Productos');

    productCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No hay productos!');
      }
      setItems(querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      }));
      setLoading(false);
    }).catch((error) => {
      console.error("Error al obtener los productos: ", error);
    });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
