import React from "react";

export default function Title(props) {
  return (
    <div className="title-container d-flex justify-content-center">
      <label className="title-label d-flex"> {props.text} </label>
    </div>
  );
}
