import React from "react";

//import "./scrollbar.css";
import { data } from "../utils/mock/dataMasComprados";

export default function MasComprados(props) {
  return (
    <>
      <div id="global" className="w-100">
        <div
          id="contenido"
          className="d-flex flex-wrap justify-content-around"
        >
          {data.map((item, index) => {
            return (
              <figure key={`item-${index}`}>
                <img src={item.src} alt="" />
                <figcaption className="bg-success">{item.veces}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </>
  );
}
