import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header';
import'../Pages/css/font/Detalles.css';
import'../Pages/css/Detalles.css';


function PedidoComidas(props) {
  const { history } = props;

  return (
    <div >
      <Header />

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
      <div className="cuadro justify-content-center">
        <div className="d-flex flex-column align-text">
          <h2 className="d-flex">Datos del comprador</h2>

          <div className="contenedor d-flex flex-column mx-auto">
          <div className="input-contenedor my-1" >
          <input type="text" placeholder="Nombre:" />
</div>
          <div className="input-contenedor my-1 d-flex" >
          <input type="text" placeholder="Telefono:" />
</div>
          <div className="input-contenedor my-1 d-flex" >
          <input type="text" placeholder="Direccion:" />
          </div>
          </div>
        </div>
        <button type="button" class="btn btn-dark mx-auto d-flex" onClick={() => history.push('/Fin-compra')} >Finalizar Compra</button>
      </div>

    </main>
    </div>
  );
}

export default withRouter(PedidoComidas);
