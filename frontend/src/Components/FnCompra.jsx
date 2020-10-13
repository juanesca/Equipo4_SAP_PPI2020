import React from "react";
import { withRouter } from "react-router-dom";

import Header from "./Header";

function FnCompra(props) {
  const { history } = props;

  return (
    <React.Fragment>
      <Header />
      <h1 className="text-dark text-center my-5 mx-auto">
        ¡SU COMPRA FUE REALIZADA CON EXITO!
      </h1>
      <div className="justify-content-center d-flex">
        <button type="submit" className="btn btn-primary my-auto"onClick={()=> history.push('/Categorias')} >
          GRACIAS POR SU COMPRA
        </button>
      </div>
    </React.Fragment>
  );
}

export default withRouter(FnCompra);