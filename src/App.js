import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Zapateria Hers" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Explora nuestras categorías" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} /> {}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
