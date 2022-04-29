//Given a triangle, find out if it is scalene, equilateral, isosceles or neither.
//Language: reactjs

import { useState } from "react";
import FormGroup from "../formGroup/FormGroup";
import equilateral from "../../assets/equilateral.png";
import isosceles from "../../assets/isosceles.png";
import scalene from "../../assets/scalene.png";
import "./TriangleStyle.css";
import { EquilateralIcon, IsocelesIcon, ScaleneIcon } from "../../assets/Icons";
import BtnIcon from "../BtnIcon";
const Triangle = () => {
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [side3, setSide3] = useState(0);
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
      setResult("Scalene"); // a triange that has 3 unequal sides
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <FormGroup name="side1" state={side1} setState={setSide1} />
        <FormGroup name="side2" state={side2} setState={setSide2} />
        <FormGroup name="side3" state={side3} setState={setSide3} />
        <aside className="icon-btn-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <BtnIcon>
            <ScaleneIcon />
          </BtnIcon>
          <BtnIcon>
            <IsocelesIcon />
          </BtnIcon>
          <BtnIcon>
            <EquilateralIcon />
          </BtnIcon>
        </aside>
      </form>
      <div className="triangles-type">{result}</div>

      <div className="trianglesImg">
        {result === "Equilateral" ? (
          <img src={equilateral} alt="equilateral" className="triangle" />
        ) : result === "Isosceles" ? (
          <img src={isosceles} alt="isosceles" className="triangle" />
        ) : result === "Scalene" ? (
          <img src={scalene} alt="scalene" className="triangle" />
        ) : null}
      </div>
    </div>
  );
};

export default Triangle;
