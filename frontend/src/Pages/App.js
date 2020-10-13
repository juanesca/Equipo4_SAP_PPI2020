import React from "react";
import Perfil from "./Perfil";
import Login from "./Login";
import Inicio from "./Inicio";
import TiendaFood from './TiendaComidas';
import Categorias from './Categorias';
import DatPizza from '../Components/DatosProducto';
import FnCompra from '../Components/FnCompra';


import TiendaTe from './tiendatecnologia';
import Pedido from './Pedidot';
import pedidoC from './pedidocomidas';
import Primercuad from '../Components/Primercuad';

import Pedidot from "./Pedidot";

import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tiendac from "./Tiendac";
import Tiendat from "./Tiendat";

export default function App() {
  return (
    <div className="App">
      <Router>
          <Link to='/Inicio'>
            <button>Inicio</button>
          </Link>
        <Switch>
          <Route path="/Fin-compra" component={FnCompra} />
          <Route path="/Inicio" component={Inicio} />
          <Route path="/Login" component={Login} />
          <Route path="/PedidoT" component={Pedido} />
          <Route path="/PedidoC" component={pedidoC} />
          <Route path="/Perfil" component={Perfil} />
          <Route path="/Tienda-comida" component={TiendaFood} />
          <Route path="/Categorias" component={Categorias} />
          <Route path='/Datos-pizza' component={DatPizza} />
          <Route path='/Tiendac' component={Tiendac} />
          <Route path='/Tiendat' component={Tiendat} />
          <Route path='/TiendaTe' component={TiendaTe} />

          <Route path='/TiendaTe' component={TiendaTe} />


          <Route path='/Primercuad' component={Primercuad} />



          <Route path='/Datos-computador' component={Pedidot} />
          

        </Switch>
      </Router>
    </div>
  );
}
