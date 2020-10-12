import React from "react";
import Perfil from "./Perfil";
import Login from "./Login";
import Facebook from "./Facebook";
import Inicio from "./Inicio";
import TiendaFood from './TiendaComidas';
import Categorias from './Categorias';
import DatPizza from '../Components/DatosProducto';
import FnCompra from '../Components/FnCompra';
<<<<<<< HEAD
import TiendaC from './Tiendac';
import TiendaT from './Tiendat';
import TiendaTe from './tiendatecnologia';
import Primercuad from '../Components/Primercuad';
=======
import Pedidot from "./Pedidot"
>>>>>>> 55e10195e5d23e785398f358ada6c601ea00d154

import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tiendac from "./Tiendac";
import Tiendat from "./Tiendat";
import TiendaTe from "./tiendatecnologia";

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
          <Route path="/Facebook-login" component={Facebook} />
          <Route path="/Perfil" component={Perfil} />
          <Route path="/Tienda-comida" component={TiendaFood} />
          <Route path="/Categorias" component={Categorias} />
          <Route path='/Datos-pizza' component={DatPizza} />
          <Route path='/Tiendac' component={Tiendac} />
          <Route path='/Tiendat' component={Tiendat} />
          <Route path='/TiendaTe' component={TiendaTe} />
<<<<<<< HEAD
          <Route path='/TiendaTe' component={TiendaTe} />
          <Route path='/Primercuad' component={Primercuad} />


=======
          <Route path='/Datos-computador' component={Pedidot} />
          
          
>>>>>>> 55e10195e5d23e785398f358ada6c601ea00d154
        </Switch>
      </Router>
    </div>
  );
}
