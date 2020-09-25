import React from "react";
import { withRouter } from "react-router-dom";

function Inicio(props) {
const { history } = props;

  return (
    <div className="d-flex w-100 h-100 flex-column">
      <span className="d-flex justify-content-center mb-auto">RECAPITO</span>
      <figure className="d-flex justify-content-center rounded-circle">
      <img
        alt="logo recapito"
        src="https://image.flaticon.com/icons/png/128/265/265725.png"
        className="d-flex justify-content-center w-50 h-50"
        onClick={()=> history.push('/Login')}

      ></img>
      </figure>
    </div>
  );
}
export default withRouter(Inicio);