import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 

function CartWidget() {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <div className="position-relative">
      <span className="h4">🛒</span>
      { cartItemsCount > 0 && 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartItemsCount}
          <span className="visually-hidden">Número de artículos en el carrito</span>
        </span>
      }
    </div>
  );
}

export default CartWidget;
