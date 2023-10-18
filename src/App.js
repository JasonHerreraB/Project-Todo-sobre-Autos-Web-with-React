
import './App.css';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';
import ListaAutos from './components/ListaAutos';
import dataAutos from './data/autos';
import { useState } from 'react';
import ListFavoritos from './components/ListFavoritos';

function App() {

  function addcartofav(Elementos) {
    let tempListAutos = [...ListadeAutosfavoritos];
    if (tempListAutos.length === 0) {
      tempListAutos.push(Elementos);
      setListadeAutosfavoritos(tempListAutos);
    } else {
      if (!tempListAutos.some((obj) => obj.Id === Elementos.Id)) {
        tempListAutos.push(Elementos);
        setListadeAutosfavoritos(tempListAutos);
      }
    }

  }

  const [ListadeAutos, setListaAutos] = useState(dataAutos);
  const [ListadeAutosfavoritos, setListadeAutosfavoritos] = useState([]);

  return (
    <div className="App">
      <Navegacion />
      <header className="App-header">
        <div className="row">
          <div className="col-md-8">
            <ListaAutos
              Elementos={ListadeAutos}
              cartofav={addcartofav} />
          </div>
          <div className="col-md-4">
            <ListFavoritos
              Elementos={ListadeAutosfavoritos}
            />
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
