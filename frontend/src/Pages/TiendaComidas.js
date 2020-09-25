import React from 'react';

import Header from '../Components/Header';
import Tiendacomidas from '../Components/TiendaComida';
import Card from '../Components/CardProducto';

import './css/TiendaComida.css';

function pagina1() {
  return (
    <div className="container-fluid">
      <Header />
      <Tiendacomidas />
      <Card />
      
    </div>
  );
}

export default pagina1;