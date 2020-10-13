import React from "react";
import './primercuad.css';
import './carritocomidas.css';

import { withRouter } from 'react-router-dom';


function primercu(props) {
  const { history } = props;
  return (
    <main>
      <p class="centrado">
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



    /*
    <div class="card-body text-dark"> 
      </div>
    </div>
        <div class="card border-dark mb-3">
      <div class="card-header">TIENDA</div>
      <img height="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHwu4RDEFg0sCUHRKTrpHrlxbr4zMbnmvDhg&usqp=CAU " class="card-img-top" alt="..."/>
      <div class="card-footer bg-transparent border-dark"></div>
      <a href="#" class="btn btn-primary">Ver</a>
      
      <div class="card-body text-dark"> 
    </div>
    </div>
        <div class="card border-dark mb-3">
      <div class="card-header">TIENDA</div>
      <img height="200px" src="https://www.hakunacafe.com/img/logo2_h.png" class="card-img-top" alt="..."/>
      <div class="card-footer bg-transparent border-dark"></div>
      <a href="#" class="btn btn-primary">Ver</a>
    
      <div class="card-body text-dark"> 
     </div>
    </div>
        <div class="card border-dark mb-3">
      <div class="card-header">TIENDA</div>
      <img height="200px" src=" https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/115702940_2774115129468197_1061027750144544015_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=3lPQ9PGmDQ4AX9Kc4rF&_nc_ht=scontent.fbog11-1.fna&oh=3ffeacc7f93381ddbce671cacf61cc7f&oe=5F987EE4" class="card-img-top" alt="..."/>
      <div class="card-footer bg-transparent border-dark"></div>
      <a href="#" class="btn btn-primary">Ver</a>
      
      <div class="card-body text-dark"> 
      </div>
    </div>
        <div class="card border-dark mb-3">
      <div class="card-header">TIENDA</div>
      <img height="200px" src=" https://scontent.fbog10-1.fna.fbcdn.net/v/t1.0-9/40072674_1965809260131767_7429409998846820352_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=oBnohjbn0KEAX8ukSw5&_nc_ht=scontent.fbog10-1.fna&oh=5b559f3dbbf4bc149752d23a2bd954f7&oe=5F968D49 " class="card-img-top" alt="..."/>
      <div class="card-footer bg-transparent border-dark"></div>
      <a href="#" class="btn btn-primary">Ver</a>
      <div class="card-body text-dark"> 
      </div>
    </div>
        <div class="card border-dark mb-3">
      <div class="card-header">TIENDA</div>
      <img height="200px" src="https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/s960x960/67348695_769920700072415_220128086216146944_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=WJ_1FHnWlCMAX_7ZnLS&_nc_ht=scontent.fbog11-1.fna&tp=7&oh=8f99d5c00e624bee89e011f90b206c37&oe=5F96F446 " class="card-img-top" alt="..."/>
      <div class="card-footer bg-transparent border-dark"></div>
      <a href="#" class="btn btn-primary">Ver</a>
      <div class="card-body text-dark"> 
      </div>
    </div>
    </div>
    
    
        </main>*/
  );
}
export default withRouter(primercu);