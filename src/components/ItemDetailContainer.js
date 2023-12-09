import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../firebase-config';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const productCollection = db.collection('Productos');
    const currentProduct = productCollection.doc(itemId);

    currentProduct.get().then((doc) => {
      if (!doc.exists) {
        console.log('El producto no existe!');
        return;
      }
      setItem({ id: doc.id, ...doc.data() });
      setLoading(false);
    }).catch((error) => {
      console.error("Error al buscar el producto: ", error);
    });
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
