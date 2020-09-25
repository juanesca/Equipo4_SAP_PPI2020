import React from "react";

import "./scrollbar.css";
import { data } from "../utils/mock/dataRecibo";

export default function Recibos(props) {
  return (
    <>
      <div id="global" className="w-100">
        <div
          id="contenido"
          className="d-flex flex-wrap-reverse justify-content-around"
        >
          {data.map((item, index) => {
            return (
              <figure key={`item-${index}`}>
                <img src={item.src} alt="" />
                <figcaption>{item.fecha}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
}
