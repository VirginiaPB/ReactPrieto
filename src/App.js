import './App.css';
import NavBar from './components/NavBar';  
import ItemListContainer from './components/ItemListContainer'; 

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Agrega NavBar */}
      <ItemListContainer greeting="Bienvenido a Zapateria Hers" /> {/* Agrega ItemListContainer con la prop greeting */}

    </div>
  );
}

export default App;


