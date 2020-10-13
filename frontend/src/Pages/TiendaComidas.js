import React from "react";

import Header from "../Components/Header";
import Card from "../Components/CardProducto";

import "./css/TiendaComida.css";

function pagina1() {
  return (
    <div className="container-fluid">
      <Header />
      <Card />
    </div>
  );
}

export default pagina1;
