import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ label, className = "", ...otherProps }) => {
  return (
    <div className='group'>
      <input className={`form-input ${className}`.trim()} {...otherProps} />
      <label htmlFor={otherProps.id} className={`form-input-label ${otherProps.value.length ? "shrink" : ""}`.trim()}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
