
import './App.css';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';
import ListaAutos from './components/ListaAutos';

function App() {
  return (
    <div className="App">
      <Navegacion />
      <header className="App-header">
        <ListaAutos />
      </header>
    </div>
  );
}

export default App;
