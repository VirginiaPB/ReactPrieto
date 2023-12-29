import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productCollectionRef = collection(db, 'Productos');
      try {
        const data = await getDocs(productCollectionRef);
        const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        // Filtrar productos por categoría
        const filteredProducts = categoryId
          ? products.filter((product) => product.category === categoryId)
          : products;

        console.log('Productos obtenidos:', filteredProducts);
        setItems(filteredProducts);
      } catch (error) {
        console.error("Error al obtener los productos: ", error);
      }
      setLoading(false);
    };

    getProducts();
  }, [categoryId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
