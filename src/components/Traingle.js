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
      //if any of the sides are not filled out
      setResult("Not a triangle");
    } else if (side1 === side2 && side2 === side3) {
      setResult("Equilateral"); // a triangle with all three sides of equal length (x=y=z)
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      setResult("Isosceles"); //a triange that has both two equal sides and two equal angles(x=y or x=z or y=z)
    } else {
      setResult("Scalene"); // a triange that has 3 unequal sides.(no two sides are equal)
    }
  };
  const triangleStyle = {
    borderLeft: `${side1}px solid transparent`,
    borderRight: `${side2}px solid transparent`,
    borderBottom: `${side3}px solid #65cbed`,
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
      <div className="triangles" style={triangleStyle}></div>
    </div>
  );
};

export default Triangle;
