import React from "react";
import { withRouter } from "react-router-dom";

function Inicio(props) {
const { history } = props;

  return (
    <div className="d-flex vw-100 vh-100 flex-column">
      {/*<span className="d-flex justify-content-center mt-5">RECAPITO</span>*/}
      <figure className="d-flex justify-content-center my-auto">
      <figcaption className="d-flex justify-content-center mt-5">RECAPITO</figcaption>
      
      <img
        alt="logo recapito"
        src="https://image.flaticon.com/icons/png/128/265/265725.png"
        className="d-flex justify-content-center w-50 mx-auto"
        onClick={()=> history.push('/Login')}

      ></img>
      </figure>
    </div>
  );
}
export default withRouter(Inicio);