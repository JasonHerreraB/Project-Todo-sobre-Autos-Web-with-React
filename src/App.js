
import './App.css';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';
import ListaAutos from './components/ListaAutos';
import dataAutos from './data/autos';
import { useState } from 'react';
import ListFavoritos from './components/ListFavoritos';
import CreateAutos from './components/FormAutos';

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

  function delcartofav(Element) {
    let tempListAutos = [...ListadeAutosfavoritos];
    tempListAutos = tempListAutos.filter((obj) => obj.Id !== Element.Id);
    setListadeAutosfavoritos(tempListAutos);
  }

  function addnewcar(Elemento) {
    let tempListAutos = [...ListadeAutos];
    tempListAutos.push(Elemento);
    setListaAutos(tempListAutos);
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
            <CreateAutos 
              fnNewAuto={addnewcar}
            />
            <ListFavoritos
              Elementos={ListadeAutosfavoritos}
              deltofav={delcartofav}
            />
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
