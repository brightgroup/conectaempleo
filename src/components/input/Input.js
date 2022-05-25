import React from "react";
import { WrapperInputLabel } from ".";

export const InputLabel = ({
  label = "",
  type = "text",
  required = "",
  placeholder = "",
  ...props
}) => {
  return (
    <WrapperInputLabel>
      <div className="d-flex flex-column">
        <label className="text-dark">{label}</label>
        <input
          className="input--style"
          type={type}
          required={required}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </WrapperInputLabel>
  );
};
