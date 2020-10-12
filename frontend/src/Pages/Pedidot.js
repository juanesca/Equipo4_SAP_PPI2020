import React from 'react';
import './css/Pedidot.css';

function Pedidot() {
return (
  
<main>
<div>
      <header className="navbar navbar-light bg-light shadow-sm">
        <section className="navbar-brand border border-dark w-70 m-0 pl-3">
          {" "}
          RECAPITO{" "}
        </section>
        <section className="navbar-brand text-center border border-dark w-30 m-0">
          {" "}
          ALGUIEN{" "}
        </section>
      </header>
    </div>
<div class="card text-dark bg-light mb-3">
  <div class="card-header">CARACTERÍSTICAS</div>
  <div class="card-body">
  <p>- 512 GB</p>
<p>- Core i5</p>
<p>- Decima G</p>
<p>- Intel</p>
<p>- Colores:</p>
<p>* Negro</p>
<p>* Azul</p>
  </div>
</div>
<div class="card text-dark bg-light mb-3">
  <div class="card-header">COSTO</div>
  <div class="card-body">
  <p class="card-text">$ 2.100.000</p>
  </div>
</div>
  
  <button type="button" class="btn btn-danger">HAZ TU PEDIDO</button>

 
    <p class="text">CHAT</p>
    <div class='imagen'>
    <img height="80px" src="https://www.pinclipart.com/picdir/big/102-1028516_chat-icon-free-download-png-and-icono-burbuja.png"></img>
    </div>
</main>
);
}
export default Pedidot;