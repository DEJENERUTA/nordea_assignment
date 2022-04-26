//Given a triangle, find out if it is scalene, equilateral, isosceles or neither.
//Language: reactjs

import { useState } from "react";
import FormGroup from "./FormGroup";
import "./TriangleStyle.css";
import "./FormGroup.css";

const Triangle = () => {
  //move the 4 useState calls into a custom hook

  const [side1, setSide1] = useState(false);
  const [side2, setSide2] = useState(false);
  const [side3, setSide3] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!side1 || !side2 || !side3) {
      setResult("Not a triangle");
      // if (
      //   side1 + side2 <= side3 ||
      //   side1 + side3 <= side2 ||
      //   side2 + side3 <= side1
      // ) {
      //   setResult("Not a triangle");
    } else if (side1 === side2 && side2 === side3) {
      setResult("Equilateral"); // a triangle with all three sides of equal length
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      setResult("Isosceles"); //a triange that has both two equal sides and two equal angles
    } else {
      setResult("Scalene"); // a triange that has 3 unequal sides.
    }
  };
  const triangleStyle = {
    width: 0,
    height: 0,
    top: "50%",
    right: "25px",
    borderLeft: `${side1}px solid transparent`,
    borderRight: `${side2}px solid transparent`,
    borderTop: `${side3}px solid #65cbed`,
    position: "absolute",
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <FormGroup name="side1" state={side1} setState={setSide1} />
        <FormGroup name="side2" state={side2} setState={setSide2} />
        <FormGroup name="side3" state={side3} setState={setSide3} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>{result}</div>
      <div style={triangleStyle}></div>
    </div>
  );
};

export default Triangle;
