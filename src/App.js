
import './App.css';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <header className="App-header">
      <Saludo/>
      </header>
    </div>
  );
}

export default App;
