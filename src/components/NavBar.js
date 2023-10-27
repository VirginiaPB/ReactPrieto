import React from 'react';
import CartWidget from './CartWidget';
import '../App.css';

function NavBar() {
  return (
    <header>
      <div className="logo">
        <span className="navbar-brand">ZAPATERIA HERS</span>
      </div>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <span className="nav-link">Sandalias</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Botas</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Zapatillas</span>
            </li>
          </ul>
        </div>
        <div className="actions">
          <CartWidget />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
