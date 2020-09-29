import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../Components/Header";

import "./css/Categorias.css";

function Categorias(props) {
  const { history } = props;

  return (
    <div id="contenedor" className="container-fluid">
      {//<Header />
      }

      {/*<div id="header">
        <div id="menu"></div>
        <div id="title">
          <h1>Recapito</h1>
        </div>
        <div id="perfil">
          <h3>Alguien</h3>
        </div>
         </div>*/}

      <div id="emergente">
        <div id="titulo">
          <h1 id="cat">CATEGORIAS</h1>
          <div id="salir" onClick={() => {
            document.getElementById("emergente").style.display = "none";
            document.getElementsByClassName("buscador")[0].disabled = false;
            document.getElementById("contenedor").style.filter = "blur(0px)";
            document.getElementById("emergente").style.opacity = "0%";
          }}>X</div>
        </div>
        <div id="TECNOLOGIA">
          <h2 id="tec">Tecnologias</h2>
          <div id="imgtec"></div>
        </div>
        <div id="comida">
          <h2 id="com">Comidas</h2>
          <div id="imgcom"></div>
        </div>
        <h1 id="text">HAZ TU ELECCION</h1>
      </div>
      <div id="contenedor">
        <div id="header">
          <div id="menu" onClick={() => {
            document.getElementById("emergente").style.display = "flex";
            document.getElementsByClassName("buscador")[0].disabled = true;
            document.getElementById("contenedor").style.filter = "blur(5px)";
            document.getElementById("contenedor").style.zIndex = "1";
            document.getElementById("emergente").style.zIndex = "2";
            document.getElementById("emergente").style.opacity = "100%";
          }}>
          </div>
          <div id="title">
            Recapito
                    </div>
          <div id="perfil">
            <h3>Alguien</h3>
          </div>
        </div>

      <div id="buscador" className="justify-content-center">
        <input
          type="search"
          className="buscador d-flex justify-content-center"
          placeholder="Busca algun producto"
          onClick={() => history.push("/Tienda-comida")}
        />
      </div>
    </div>
    </div>
  );
}

export default withRouter(Categorias);
