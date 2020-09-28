/*import React, { useState } from "react";

import Header from '../Components/Header'
import Title from "../Components/Title";
import Label from "../Components/Label";
import Input from "../Components/Input";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(name, value) {
    if (name === "nombre") {
      setUser(value);
    } else {
      setPassword(value);
    }
  }
  function handleSubmit() {
    let account = { user, password };
    if (account.user != null && account.password != null) {
      console.log("account:", account);
    }
  }

  return (
    <div className="login-container justify-content-center">
      <div className="login-content">
      <Header />

        <Title
          text="TE DAMOS LA BIENVENIDA A
    R E C A P I T O"
        />
        <Label text="Nombre" />
        <Input
          attribute={{
            id: "nombre",
            name: "nombre",
            type: "text",
            placeholder: "Ingrese su nombre"
          }}
          handleChange={handleChange}
        />
        <Label text="Contraseña" />
        <Input
          attribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "Ingrese su contraseña"
          }}
          handleChange={handleChange}
        />
        <div className="submit-button-container">
          <button onClick={handleSubmit} type="button"
          className="btn btn-primary btn-lg w-75 d-flex mx-auto my-1 justify-content-center"
        >CONTINUAR</button>
        </div>
      </div>
    </div>
  );
}*/
import React from "react";

import { withRouter } from "react-router-dom";

function Login(props) {
  const { history } = props;
  return (
    <main>
      <h1 className="text-dark text-center my-5">TE DAMOS LA BIENVENIDA A</h1>
      <h1 className="text-dark text-center my-5">R E C A P I T O</h1>

      <div className="container">
        <form className="form col-12 col-md-6">
          <div className="boton">
            <button
              onClick={() => history.push("/Perfil")}
              type="button"
              className="btn btn-primary btn-medium btn-block"
            >
              Perfil de usuario
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Usuario</label>
            <input
              type="email"
              className="form-control"
              id="exampleDropdownFormEmail2"
              placeholder="Usuario"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword2"
              placeholder="Contraseña"
            ></input>
          </div>

          <button type="submit" className="btn btn-primary">
            CONTINUAR
          </button>
          <button
            onClick={() => history.push("/Facebook-login")}
            type="submit"
            className="btn btn-primary"
          >
            Facebook
          </button>
        </form>
      </div>
    </main>
  );
}

export default withRouter(Login);
