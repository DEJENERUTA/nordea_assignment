//Given a triangle, find out if it is scalene, equilateral, isosceles or neither.
//Language: reactjs
//Path: nordea-test/src/components/Triangle.js
import React, { useState } from "react";
const Test = () => {
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
        <div className="form-group">
          <label htmlFor="side1">Side 1</label>
          <input
            type="number"
            className="form-control"
            id="side1"
            value={side1}
            onChange={(e) => setSide1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="side2">Side 2</label>
          <input
            type="number"
            className="form-control"
            id="side2"
            value={side2}
            onChange={(e) => setSide2(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="side3">Side 3</label>
          <input
            type="number"
            className="form-control"
            id="side3"
            value={side3}
            onChange={(e) => setSide3(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Test;
