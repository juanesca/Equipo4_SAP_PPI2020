import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "../Components/popup.css";
import "../images/perfil.PNG";

import Header from "../Components/Header";
import Recibos from "../Components/Recibos";
import MComprados from "../Components/MasComprados";
import Favs from "../Components/Favoritos";
import Cupones from "../Components/Cupones";

function Perfil(props) {
  const { history } = props;
  const [stateImage, setStateImage] = useState("../images/perfil.PNG");

  function perfil() {
    document.querySelectorAll("img").forEach(function (el) {
      el.addEventListener("click", function () {
        setStateImage("../images/" + el.dataset.image);
      });
    });
  }

  function pup(a) {
    var btnAbrirPopup = document.getElementById(`btn-abrir-popup${a}`);
    var overlay = document.getElementById(`overlay${a}`);
    var popup = document.getElementById(`popup${a}`);
    var btnCerrarPopup = document.getElementById(`btn-cerrar-popup${a}`);

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
    <div>
      <Header />
      <div className="d-flex flex-column">
        <figure className="justify-content-center" id="btn-abrir-popup0">
          <div className="d-flex rounded-circle justify-content-center">
            <img
              src={require(stateImage !== undefined && stateImage !== null
                ? stateImage
                : "../images/perfil.PNG")}
              alt="Perfil"
              className="rounded-circle btn-abrir-popup"
              type="button"
              onClick={() => pup(0)}
            />
          </div>
          <figcaption
            type="button"
            className="text-center"
            onClick={() => pup(0)}
          >
            Editar foto de perfil
          </figcaption>
        </figure>
        <button
          type="button"
          id="btn-abrir-popup5"
          onClick={() => pup(5)}
          //onClick={() => history.push("/Favoritos")}
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Favoritos
        </button>
        <button
          type="button"
          id="btn-abrir-popup1"
          onClick={() => pup(1)}
          //onClick={() => (i[0] = true)}
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Dirección
        </button>
        <button
          id="btn-abrir-popup2"
          type="button"
          onClick={() => pup(2)}
          //onClick={() => history.push("/Telefono")}
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Telefono
        </button>
        <button
          type="button"
          id="btn-abrir-popup6"
          onClick={() => pup(6)}
          //onClick={() => history.push("/Cupones")}
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Cupones
        </button>
        <button
          type="button"
          id="btn-abrir-popup4"
          onClick={() => pup(4)}
          //onClick={() => history.push("/MasComprados")}
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 justify-content-center"
        >
          Más Comprados
        </button>
        <button
          type="button"
          id="btn-abrir-popup3"
          onClick={() => pup(3)}
          //onClick={() => history.push("/Recibos")}
          className="btn btn-white border border-black btn-lg w-75 d-flex text-center mx-auto my-1 mb-3 justify-content-center"
        >
          Recibos de Compra
        </button>
        <button
          type="button"
          onClick={() => history.push("/Login")}
          className="btn btn-danger btn-lg w-75 d-flex text-center mx-auto mb-4 justify-content-center"
        >
          CERRAR SESION
        </button>
        <button
          type="button"
          onClick={() => history.push("/Categorias")}
          className="btn btn-primary btn-lg w-75 d-flex mx-auto my-1 justify-content-center"
        >
          A COMPRAR!
        </button>
      </div>

      <div className="overlay" id="overlay0">
        <div className="popup mx-4" id="popup0">
          <button id="btn-cerrar-popup0" className="btn-cerrar-popup">
            <i className="fas fa-times"></i>
          </button>
          <h3>Elige una imagen</h3>
          <form>
            <div className="justify-content-center ">
              <div className="d-flex flex-row justify-content-center">
                <img
                  src={require("../images/perfil1.PNG")}
                  alt="foto 1"
                  className="d-flex img"
                  onClick={() => perfil()}
                  type="button"
                  data-image="perfil1.PNG"
                  id="img1"
                />
                <img
                  src={require("../images/perfil2.PNG")}
                  alt="foto 2"
                  className="d-flex img"
                  onClick={() => perfil()}
                  type="button"
                  data-image="perfil2.PNG"
                  id="img2"
                />
                <img
                  src={require("../images/perfil1.PNG")}
                  alt="foto 3"
                  className="d-flex img"
                  onClick={() => perfil()}
                  type="button"
                  data-image="perfil1.PNG"
                  id="img3"
                />
              </div>
              <div className="d-flex flex-row justify-content-center">
                <img
                  src={require("../images/perfil2.PNG")}
                  alt="foto 4"
                  className="d-flex img"
                  onClick={() => perfil()}
                  type="button"
                  data-image="perfil2.PNG"
                  id="img4"
                />
                <img
                  src={require("../images/perfil1.PNG")}
                  alt="foto 5"
                  className="d-flex img"
                  onClick={() => perfil()}
                  type="button"
                  data-image="perfil1.PNG"
                  id="img5"
                />
                <img
                  src={require("../images/perfil2.PNG")}
                  alt="foto 6"
                  className="d-flex img"
                  onClick={() => perfil()}
                  type="button"
                  data-image="perfil2.PNG"
                  id="img6"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="overlay" id="overlay1">
        <div className="popup mx-4" id="popup1">
          <button href="#" id="btn-cerrar-popup1" className="btn-cerrar-popup">
            <i className="fas fa-times"></i>
          </button>
          <h3>Dirección</h3>
          <form action="">
            <div className="contenedor-inputs">
              <input type="text" placeholder="Dirección" required />
            </div>
            <input type="submit" className="btn-submit" value="OK" />
          </form>
        </div>
      </div>

      <div className="overlay" id="overlay2">
        <div className="popup mx-4" id="popup2">
          <button href="#" id="btn-cerrar-popup2" className="btn-cerrar-popup">
            <i className="fas fa-times"></i>
          </button>
          <h3>Telefono</h3>
          <form action="">
            <div className="contenedor-inputs">
              <input type="text" placeholder="Telefono" required />
              <input type="text" placeholder="Nº Celular" />
            </div>
            <input type="submit" className="btn-submit" value="OK" />
          </form>
        </div>
      </div>

      <div className="overlay" id="overlay3">
        <div className="popup mx-4" id="popup3">
          <button href="#" id="btn-cerrar-popup3" className="btn-cerrar-popup">
            <i className="fas fa-times"></i>
          </button>
          <h3>Recibos</h3>
          <form action="">
            <Recibos />
          </form>
        </div>
      </div>

      <div className="overlay" id="overlay4">
        <div className="popup mx-4" id="popup4">
          <button href="#" id="btn-cerrar-popup4" className="btn-cerrar-popup">
            <i className="fas fa-times"></i>
          </button>
          <h3>Mas Comprados</h3>
          <form action="">
            <MComprados />
          </form>
        </div>
      </div>

      <div className="overlay" id="overlay5">
        <div className="popup mx-4" id="popup5">
          <button href="#" id="btn-cerrar-popup5" className="btn-cerrar-popup">
            <i className="fas fa-times"></i>
          </button>
          <h3>Favoritos</h3>
          <form action="">
            <Favs />
          </form>
        </div>
      </div>

      <div className="overlay" id="overlay6">
        <div className="popup mx-4" id="popup6">
          <button href="#" id="btn-cerrar-popup6" className="btn-cerrar-popup">
            <i className="fas fa-times"></i>
          </button>
          <h3>Cupones</h3>
          <form action="">
            <Cupones />
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Perfil);
