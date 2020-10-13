import React from "react";

import Perfil from "./Perfil";
import Login from "./Login";
import Inicio from "./Inicio";
import TiendaFood from './ProductosComidas';
import Categorias from './Categorias';
import DatPizza from '../Components/DatosProducto';
import FnCompra from '../Components/FnCompra';
import TiendaC from './Restaurantes';
import TiendaT from './TiendaTechno';
import TiendaTe from './tiendatecnologia';
import Pedido from './PedidoTechno';
import PedidoComida from "./PedidoComida";

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
          <Route path="/PedidoT" component={Pedido} />
          <Route path="/PedidoComida" component={PedidoComida} />
          <Route path="/Perfil" component={Perfil} />
          <Route path="/Productos" component={TiendaFood} />
          <Route path="/Categorias" component={Categorias} />
          <Route path='/Datos-pizza' component={DatPizza} />
          <Route path='/TiendaC' component={TiendaC} />
          <Route path='/TiendaT' component={TiendaT} />
          <Route path='/TiendaTe' component={TiendaTe} />
        </Switch>
      </Router>
    </div>
  );
}
