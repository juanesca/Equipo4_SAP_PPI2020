import React from "react";

import Header from "./Header";

export default function FnCompra() {
  return (
    <React.Fragment>
      <Header />
      <h1 class="text-dark text-center my-5">
        ¡SU COMPRA FUE REALIZADA CON EXITO!
      </h1>
      <div class="compra">
        <button type="submit" class="btn btn-primary">
          GRACIAS POR SU COMPRA
        </button>
      </div>
    </React.Fragment>
  );
}
