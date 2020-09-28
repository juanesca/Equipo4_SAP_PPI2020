import React from "react";

import { data } from "../utils/mock/dataCupones";

export default function Favoritos(props) {
  return (
    <>
      <div id="global" className="w-100">
        <div id="contenido" className="d-flex flex-wrap justify-content-around">
          {data.map((item, index) => {
            return (
              <figure key={`item-${index}`}>
                <img src={item.src} alt="" />
                <figcaption>
                  <span className="d-block">{item.cant} cupones</span>
                  <span>{item.off}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
}
