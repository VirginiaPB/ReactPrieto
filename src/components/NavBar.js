import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header>
      <div className="logo">
        <Link to="/" className="navbar-brand">ZAPATERIA HERS</Link>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/category/sandalias" className="nav-link">Sandalias</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/botas" className="nav-link">Botas</Link>
            </li>
            <li className="nav-item">
              <Link to="/category/zapatillas" className="nav-link">Zapatillas</Link>
            </li>
          </ul>
        </div>
        <div className="actions">
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
