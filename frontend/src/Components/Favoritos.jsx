import React from "react";

import { data } from "../utils/mock/dataFavoritos";

export default function Favoritos(props) {
  return (
    <>
      <div id="global" className="w-100 contenedor-inputs">
        <div id="contenido" className="d-flex flex-wrap justify-content-around">
          {data.map((item, index) => {
            return (
              <figure key={`item-${index}`}>
                <img src={item.src} alt="" />
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
}
