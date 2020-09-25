import React from "react";

function Input(props) {
  return (
    <div className="input-container d-flex">
      <input
        id={props.attribute.id}
        name={props.attribute.name}
        placeholder={props.attribute.placeholder}
        type={props.attribute.type}
        onChange={props.handleChange(
          props.attribute.name,
          props.attribute.value
        )}
        className="regular-style d-flex"
      ></input>
    </div>
  );
}

export default Input;

