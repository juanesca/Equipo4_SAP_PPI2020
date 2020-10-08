import React from "react";
import { withRouter } from "react-router-dom";

import "./css/Categorias.css";
import "../Components/popup.css";


function Categorias(props) {
  const { history } = props;

  function pup() {
    var btnAbrirPopup = document.getElementById(`btn-abrir-popup`);
    var overlay = document.getElementById(`overlay`);
    var popup = document.getElementById(`popup`);
    var btnCerrarPopup = document.getElementById(`btn-cerrar-popup`);

    if (btnAbrirPopup) {
      btnAbrirPopup.addEventListener("click", function () {
        overlay.classList.add("active");
        popup.classList.add("active");
      });
    }
    if (btnCerrarPopup) {
      btnCerrarPopup.addEventListener("click", function (e) {
        e.preventDefault();
        overlay.classList.remove("active");
        popup.classList.remove("active");
      });
    }
  }

  return (
    <div id="contenedor" className="container-fluid">
      <header className="navbar navbar-light bg-light shadow-sm container-fluid">
        <section className="navbar-brand border border-dark w-70 m-0 pl-3">
          <span className="navbar-toggler-icon" id="btn-abrir-popup" onClick={() =>
            pup(0)
          }></span>
          <span>{" "}
          RECAPITO{" "}</span>
        </section>
        <section
          onClick={() => history.push('/Perfil')}
          className="navbar-brand text-center border border-dark w-30 m-0">
          <figure className="d-inline m-0">
            <img className="rounded-circle" src={require('../images/perfil.PNG')} alt="" width="30 px" height="30 px" />
            <figcaption className="d-inline">ALGUIEN</figcaption>
          </figure>
        </section>
      </header>


      <div>

        <div id="buscador" className="d-flex justify-content-center">
          <input
            type="search"
            className="buscador d-flex justify-content-center"
            placeholder="Busca algun producto"
            onClick={() => history.push("/Tienda-comida")}
          />
        </div>
      </div>

      <div className="overlay" id="overlay">
        <div className="popup mx-4" id="popup">
          <i className="btn-cerrar-popup" id="btn-cerrar-popup" aria-label="close" role="button">&times;</i>
          <h3>Categorias</h3>
          <form action="" className="justify-content-center">
            <figure>
              <figcaption id="tec" className="mx-auto">Tecnologias</figcaption>
              <img id="imgtec" src="https://miro.medium.com/max/1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg" alt="..." />

            </figure>
            <figure>
              <figcaption id="tec" className="mx-auto">Tecnologias</figcaption>
              <img id="imgtec" src="https://miro.medium.com/max/1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg" alt="..." />

            </figure>
            <div id="TECNOLOGIA" className="d-flex"> 
            </div>
            <div id="comida" className="d-flex">
              <h2 id="com">Comidas</h2>
              <div id="imgcom"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Categorias);
