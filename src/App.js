
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
      localStorage.setItem('cartofav', JSON.stringify(tempListAutos));
      setListadeAutosfavoritos(JSON.parse(localStorage.getItem('cartofav')));
    } else {
      if (!tempListAutos.some((obj) => obj.Id === Elementos.Id)) {
        tempListAutos.push(Elementos);
        localStorage.setItem('cartofav', JSON.stringify(tempListAutos));
        setListadeAutosfavoritos(JSON.parse(localStorage.getItem('cartofav')));
      }
    }
  }

  function delcartofav(Element) {
    let tempListAutos = [...ListadeAutosfavoritos];
    tempListAutos = tempListAutos.filter((obj) => obj.Id !== Element.Id);
    localStorage.setItem('cartofav', JSON.stringify(tempListAutos));
    setListadeAutosfavoritos(JSON.parse(localStorage.getItem('cartofav')));
  }

  function addnewcar(Elemento) {
    let tempListAutos = [...ListadeAutos];
    tempListAutos.push(Elemento);
    localStorage.setItem('listaAutos', JSON.stringify(tempListAutos));
  }


  if (localStorage.getItem('listaAutos') === null) {
    localStorage.setItem('listaAutos', JSON.stringify(dataAutos));
  }


  const [ListadeAutos, setListaAutos] = useState(JSON.parse(localStorage.getItem('listaAutos')));
  const [ListadeAutosfavoritos, setListadeAutosfavoritos] = useState(JSON.parse(localStorage.getItem('cartofav')));

  /*if (localStorage.getItem('cartofav') === null) {
    const [ListadeAutosfavoritos, setListadeAutosfavoritos] = useState([]);
  } else {
    const [ListadeAutosfavoritos, setListadeAutosfavoritos] = useState(JSON.parse(localStorage.getItem('cartofav')));
  }*/

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
