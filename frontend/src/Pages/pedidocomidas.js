import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header';

import '../Components/primercuad.css';


function PedidoComidas(props) {
  const { history } = props;

  return (
    <div >
      < Header />

      <main>
      <p class="text-center">
        <img src="https://image.flaticon.com/icons/png/128/34/34627.png" align-img="center"></img>
      </p>
      <div class="card-align">
        <div class="card border-dark mb-3">
          <div class="card-header">PRODUCTO</div>
          <div class="card-body text-dark">
          <img height="100px" width="15px" src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg" className="card-img-top img-fluid" alt="..." display="inline" background-color="red" />
          </div>
        </div>
        <div class="card border-dark mb-3">
          <div class="card-header">COSTO FINAL</div>
          <div class="card-body text-dark">
            <h5 class="card-title">$19.900</h5>
          </div>
        </div>
        <div class="card border-dark mb-3">
          <div class="card-header">MEDIO DE PAGO</div>
          <div class="card-body text-dark">
            <h5 class="card-title">EFECTIVO</h5>
          </div>
        </div>
      </div>
      <div className="cuadro">
        <div className="align-text">
          <h2>Datos del comprador</h2>

          <div className="contenedor" />
          <div className="input-contenedor" />
          <input type="text" placeholder="Nombre:" />

          <div className="input-contenedor" />
          <input type="text" placeholder="Telefono:" />

          <div className="input-contenedor" />
          <input type="text" placeholder="Direccion:" />
        </div>
        <button type="button" class="btn btn-dark" Finalizar compra onClick={() => history.push('/Fin-compra')} />
      </div>

    </main>
    </div>
  );
}

export default withRouter(PedidoComidas);
