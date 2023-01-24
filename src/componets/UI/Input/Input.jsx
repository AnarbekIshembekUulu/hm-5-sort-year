import React from "react";
import "./input.css";

function Input({ labelName, inputType, placeHolder, onChange, ...rest }) {
  return (
    <div>
      <div>
        <label className="labelStyle">{labelName}</label>
      </div>
      <div>
        <input
          className="inputStyle"
          type={inputType}
          placeholder={placeHolder}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
}

export default Input;
