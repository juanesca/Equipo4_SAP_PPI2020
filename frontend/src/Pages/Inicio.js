import React from "react";
import { withRouter } from "react-router-dom";

function Inicio(props) {
  const { history } = props;

  return (
    <div className="d-flex vw-100 vh-100 flex-column bg-gradient-primary">
      <span className="float-left mt-5 mx-auto">RECAPITO</span>
      <figure className="d-flex justify-content-center my-auto">
        {/*<figcaption className="d-flex justify-content-center mt-5">RECAPITO</figcaption>*/}

        <img
          alt="logo recapito"
          src={require('../images/RecapitoLogo.png')}
          className="d-flex justify-content-center w-50 mx-auto"
          onClick={() => history.push('/Login')}

        ></img>
      </figure>
    </div>

  );
}
export default withRouter(Inicio);