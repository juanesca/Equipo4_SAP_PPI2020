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
}
import React from "react";

import { withRouter } from "react-router-dom";

function Login(props) {
  const { history } = props;



  return (
    <div className="flex-wrap">
      <h1 className="text-dark text-center my-5">TE DAMOS LA BIENVENIDA A</h1>
      <h1 className="text-dark text-center my-5">R E C A P I T O</h1>

      <div className="container-fluid mx-5">
        <form className="mx-auto container-fluid">
          {<div className="btn w-75">
            <button
              onClick={() => history.push("/Perfil")}
              type="button"
              className="btn btn-primary btn-medium btn-block"
            >
              Perfil de usuario
            </button>
  </div>}
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Usuario</label>
            <input
              type="email"
              className="form-control w-75"
              id="exampleDropdownFormEmail2"
              placeholder="Usuario"
            ></input>
          </div>

          <div className="form-group w-75">
            <label htmlFor="exampleDropdownFormPassword2">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleDropdownFormPassword2"
              placeholder="Contraseña"
            ></input>
          </div>
          <div className="d-flex flex-column container-fluid">
            <button type="submit" className="btn btn-primary w-50 mx-auto" onClick={() => { history.push('/Categorias') }}>
              CONTINUAR
          </button>
            {/*<div className="fb-login-button mt-5 mx-auto" data-size="large" data-button-type="continue_with" data-layout="rounded" data-auto-logout-link="false" data-use-continue-as="false" data-width="" scope="public_profile,email"
              onLogin="checkLoginState()"></div>}
          </div>
        </form>
      </div>
    </div>
  );
}
*/


import React from "react";

import { withRouter } from "react-router-dom";
import './css/Login.css';

function Login(props) {
  const { history } = props;
  return (
<main>

<h1 class="text-dark text-center my-5">TE DAMOS LA BIENVENIDA A</h1>
<h1 class="text-dark text-center my-5">R E C A P I T O</h1>


  <div class="form-group">
<label for="exampleDropdownFormEmail2">Usuario</label>
<input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="Usuario">
  </input>
</div>
    
    <div class="form-group">
<label for="exampleDropdownFormPassword2">Contraseña</label>
<input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Contraseña">
</input>
    </div>
  

<button type="submit" class="btn btn-primary"  onClick={() => {history.push('/Categorias')} }>
CONTINUAR
  </button>



</main>

);
}
export default withRouter(Login);