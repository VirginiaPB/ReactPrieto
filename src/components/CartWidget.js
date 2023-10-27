import React from 'react';

function CartWidget() {
  return (
    <div className="position-relative">
      <span className="h4">🛒</span> {/* Ícono del carrito */}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3 {/* Número de artículos en el carrito */}
        <span className="visually-hidden">Número de artículos en el carrito</span>
      </span>
    </div>
  );
}

export default CartWidget;
