import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...OtherProps }) => (
  <div className="group">
    <input onChange={handleChange} {...OtherProps} className="form-input" />
    {label ? (
      <label
        className={`${
          OtherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
