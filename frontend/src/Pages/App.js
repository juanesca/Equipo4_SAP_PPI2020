import React from "react";
import Perfil from "./Perfil";
import Login from "./Login";
import Facebook from "./Facebook";
import Inicio from "./Inicio";
import TiendaFood from './TiendaComidas';
import Categorias from './Categorias';
import DatPizza from '../Components/DatosProducto';
import FnCompra from '../Components/FnCompra';
import TiendaC from './Tiendac';
import TiendaT from './Tiendat';
import TiendaTe from './tiendatecnologia';
import Primercuad from '../Components/Primercuad';

import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
          
        <Switch>
          <Route path="/Fin-compra" component={FnCompra} />
          <Route exact path="/" component={Inicio} />
          <Route path="/Login" component={Login} />
          <Route path="/Facebook-login" component={Facebook} />
          <Route path="/Perfil" component={Perfil} />
          <Route path="/Tienda-comida" component={TiendaFood} />
          <Route path="/Categorias" component={Categorias} />
          <Route path='/Datos-pizza' component={DatPizza} />
          <Route path='/TiendaC' component={TiendaC} />
          <Route path='/TiendaT' component={TiendaT} />
          <Route path='/TiendaTe' component={TiendaTe} />
          <Route path='/TiendaTe' component={TiendaTe} />
          <Route path='/Primercuad' component={Primercuad} />


        </Switch>
      </Router>
    </div>
  );
}
