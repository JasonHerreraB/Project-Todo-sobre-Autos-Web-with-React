
import './App.css';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';
import ListaAutos from './components/ListaAutos';
import dataAutos from './data/autos';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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

  async function addnewcar(Elemento) {
    try {
      // Realiza una solicitud POST al servidor con los datos del nuevo Auto
      const response = await Axios.post('http://localhost:4000/api/autos', Elemento);

      // Actualiza las tarjetas
      console.log('Producto creado exitosamente:', response.data);
      
      Axios.get('http://localhost:4000/api/autos')
        .then((response) => {
          setListaAutos(response.data);
        })
        .catch((error) => {
          console.error(error);
        });


    } catch (error) {
      // Maneja errores, por ejemplo, muestra un mensaje de error
      console.error('Error al crear el producto:', error);
    }
  }





  const [ListadeAutos, setListaAutos] = useState([]);
  const [ListadeAutosfavoritos, setListadeAutosfavoritos] = useState(JSON.parse(localStorage.getItem('cartofav')));

  useEffect(() => {
    Axios.get('http://localhost:4000/api/autos')
      .then((response) => {
        setListaAutos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



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
