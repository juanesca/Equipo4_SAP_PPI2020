import React from "react";

import Header from "../Components/Header";
import Card from "../Components/CardProducto";

import { data } from '../utils/mock/dataImgProductCom';

import "./css/TiendaComida.css";

function pagina1(props) {

  return (
    <div className="container-fluid">
      <Header />
      {
        data.map(imagen=>(
          <Card
          key={imagen.id}
          imagen={imagen}
          />
        ))
      }
      
    </div>
  );
}

export default pagina1;
