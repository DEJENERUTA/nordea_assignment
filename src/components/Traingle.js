//Given a triangle, find out if it is scalene, equilateral, isosceles or neither.
//Language: reactjs

import { useState } from "react";
import FormGroup from "./FormGroup";

const Triangle = () => {
  //move the 4 useState calls into a custom hook

  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [side3, setSide3] = useState(0);
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1
    ) {
      setResult("Not a triangle");
    } else if (side1 === side2 && side2 === side3) {
      setResult("Equilateral");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      setResult("Isosceles");
    } else {
      setResult("Scalene");
    }
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
    </div>
  );
};

export default Triangle;
