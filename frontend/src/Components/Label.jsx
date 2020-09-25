import React from "react";

function Label({ text }) {
  return (
    <div className="justify-content-center mr-3">
      <label className="d-flex"> {text} </label>
    </div>
  );
}

export default Label;
