// components/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          <Link to="/checkout" className="btn btn-success">Finalizar Compra</Link>
          <button onClick={clearCart} className="btn btn-warning">Vaciar Carrito</button>
        </>
      )}
      <Link to="/" className="btn btn-primary">Continuar Comprando</Link>
    </div>
  );
};

export default Cart;
