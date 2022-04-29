import React from "react";

const BtnIcon = ({ children, fun }) => {
  return (
    <button onClick={fun} className="btn btn-primary btn-overrider">
      {children}
    </button>
  );
};

export default BtnIcon;
