import React from "react";
import { withRouter } from "react-router-dom";

import "./css/Inicio.css";

function Inicio(props) {
const { history } = props;

  return (
<<<<<<< HEAD
    <div className="d-flex vw-100 vh-100 flex-column bg-gradient-primary">
      <span className="float-left mt-5 mx-auto">RECAPITO</span>
      <figure className="d-flex justify-content-center my-auto">
      {/*<figcaption className="d-flex justify-content-center mt-5">RECAPITO</figcaption>*/}
      
      <img
        alt="logo recapito"
        src={require('../images/RecapitoLogo.png')}
=======
    <div className="d-flex vw-100 vh-100 flex-column">
      {/*<span className="d-flex justify-content-center mt-5">RECAPITO</span>*/}
     <h1>Recapito</h1>
      
      <img
        alt="logo recapito"
        src="https://image.flaticon.com/icons/png/128/265/265725.png" 
>>>>>>> e2d01685ac1fb464fcf92286132dea9e26d8f680
        className="d-flex justify-content-center w-50 mx-auto"
        onClick={()=> history.push('/Login')}

      ></img>
    
    </div>
  );
}
export default withRouter(Inicio);