import React from "react";
import Perfil from "./Perfil";
import Login from "./Login";
import Facebook from "./Facebook";
import Inicio from "./Inicio";
import TiendaFood from './TiendaComidas';
import Categorias from './Categorias';
import DatPizza from '../Components/DatosProducto';

import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
          <Link to='/Inicio'>
            <button>Inicio</button>
          </Link>
        <Switch>
          <Route path="/Inicio" component={Inicio} />
          <Route path="/Login" component={Login} />
          <Route path="/Facebook-login" component={Facebook} />
          <Route path="/Perfil" component={Perfil} />
          <Route path="/Tienda-comida" component={TiendaFood} />
          <Route path="/Categorias" component={Categorias} />
          <Route path='/Datos-pizza' component={DatPizza} />
        </Switch>
      </Router>
    </div>
  );
}
