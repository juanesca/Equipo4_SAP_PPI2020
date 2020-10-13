import React from "react";
import { withRouter } from "react-router-dom";
import './segundocuad.css';
function segundocu(props) {
  const { history } = props;
  
  return (

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
        <button type="button" class="btn btn-dark" onClick={()=> history.push('/Fin-Compra')} >Finalizar compra</button>
</div>



     
        



);
}
export default withRouter(segundocu);