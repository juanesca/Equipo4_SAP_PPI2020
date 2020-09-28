import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../Components/Header";

import "./css/Categorias.css";

function Categorias(props) {
  const { history } = props;

  return (
    <div id="contenedor" className="container-fluid">
      <Header />

      {/*<div id="header">
        <div id="menu"></div>
        <div id="title">
          <h1>Recapito</h1>
        </div>
        <div id="perfil">
          <h3>Alguien</h3>
        </div>
  </div>*/}
      <div id="buscador" className="justify-content-center">
        <input
          type="search"
          className="buscador d-flex justify-content-center"
          placeholder="Busca algun producto"
          onClick={() => history.push("/Tienda-comida")}
        />
      </div>
    </div>
  );
}

export default withRouter(Categorias);
