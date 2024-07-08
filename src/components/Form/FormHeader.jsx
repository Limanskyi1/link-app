import React from "react";

export const FormHeader = ({title,subtitle}) => {
  return (
    <>
      <h2>{title}</h2>
      <p className="md-text ">{subtitle}</p>
    </>
  );
};
