import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../Components/Header";

 function Facebook(props) {
const { history } = props;

  return (
    <div>
      <Header />

      <div className="fl">
        <form className="formulario">
          <h1 className="bg-white"> Inicia Sesion con Facebook</h1>
          <div className="input-contenedor">
            <input
              type="text"
              placeholder="Correo electronico o telefono"
              className="w-100"
            />
          </div>
          <div className="input-contenedor">
            <input placeholder="Contraseña" type="password" className="w-100" />
            <input type="submit" value="Iniciar Sesión" className="button" onClick={()=> history.push('/Perfil')} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Facebook);