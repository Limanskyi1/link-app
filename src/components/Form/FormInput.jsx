import React from "react";

export const FormInput = React.forwardRef(({ labelName, typeInput, icon , error , ...rest }, ref) => {
  return (
    <label className="sm-text">
      {labelName}
      <div className={`input ${error ? "error-input": ""}`}>
        {icon}
        <input type={typeInput} ref={ref} {...rest} />
      </div>
    </label>
  );
});