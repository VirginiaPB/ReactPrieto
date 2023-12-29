import React, { useContext, useState } from 'react';
// Asegúrate de que la ruta a CartContext sea correcta
import { CartContext } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config'; // Ajusta esta ruta según sea necesario

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const validateInfo = () => {
    if (customerInfo.email !== customerInfo.confirmEmail) {
      alert('Los correos electrónicos no coinciden.');
      return false;
    }
    return true;
  };

  const handleCheckout = async () => {
    if (validateInfo()) {
      const order = {
        buyer: {
          name: customerInfo.name,
          lastName: customerInfo.lastName,
          phone: customerInfo.phone,
          email: customerInfo.email,
        },
        items: cart.map(({ id, title, price, quantity }) => ({ id, title, price, quantity })),
        total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        date: new Date().toISOString(),
      };

      try {
        const docRef = await addDoc(collection(db, 'orders'), order);
        console.log('Order ID:', docRef.id);
        clearCart();
        alert(`Tu orden ha sido creada con el ID: ${docRef.id}`);
      } catch (error) {
        console.error('Error al crear la orden:', error);
      }
    }
  };

  return (
    <div className="checkout">
      {/* Asegúrate de que los inputs estén correctamente vinculados a handleInputChange */}
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={customerInfo.name} onChange={handleInputChange} />
      <label htmlFor="lastName">Apellido:</label>
      <input type="text" id="lastName" name="lastName" value={customerInfo.lastName} onChange={handleInputChange} />
      <label htmlFor="phone">Teléfono:</label>
      <input type="text" id="phone" name="phone" value={customerInfo.phone} onChange={handleInputChange} />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={customerInfo.email} onChange={handleInputChange} />
      <label htmlFor="confirmEmail">Confirmar Email:</label>
      <input type="email" id="confirmEmail" name="confirmEmail" value={customerInfo.confirmEmail} onChange={handleInputChange} />
      
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
