import React, { useRef, useState } from "react";

const IconInput = props => {
  const inputValue = useRef("");
  return (
    <div className="icon-input">
      <img className="icon-input__icon" src={props.icon} alt="icon" />
      <input
        className="icon-input__input"
        defaultValue={props.value}
        placeholder={props.placeholder}
        onFocus={props.onFocus}
        onChange={e => props.onChange(e.target.value)}
        ref={inputValue}
        type="text"
        style={props.inputStyle}
      />
    </div>
  );
};

export default IconInput;
