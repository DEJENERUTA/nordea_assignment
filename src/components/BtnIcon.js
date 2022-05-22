import React from "react";

const BtnIcon = ({ children, fun }) => {
  // this snippet will be used to display the icon of the triangle
  return (
    <button
      onClick={fun} // this function will be used to reset the values of the sides of the triangle
      className="btn btn-primary btn-overrider"
    >
      {children} // this variable will be used to display the result of the
      triangle
    </button>
  );
};

export default BtnIcon;
