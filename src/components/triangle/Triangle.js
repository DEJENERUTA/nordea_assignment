//Given a triangle, find out if it is scalene, equilateral, isosceles or neither.
//Language: reactjs

import { useState } from "react"; // this useState will perform the function when the component is rendered and when the component is updated (when the state changes)
import FormGroup from "../formGroup/FormGroup";
import equilateral from "../../assets/equilateral.png";
import isosceles from "../../assets/isosceles.png";
import scalene from "../../assets/scalene.png";
import { EquilateralIcon, IsocelesIcon, ScaleneIcon } from "../../assets/Icons";
import BtnIcon from "../BtnIcon";
import "./TriangleStyle.css";

const Triangle = () => {
  const [side1, setSide1] = useState(0); // this variable will be used to store the value of the first side of the triangle
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
        {" "}
        // this form will be used to get the values of the sides of the triangle
        <FormGroup name="side1" state={side1} setState={setSide1} />
        <FormGroup name="side2" state={side2} setState={setSide2} />
        <FormGroup name="side3" state={side3} setState={setSide3} />
        <aside className="icon-btn-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <BtnIcon
            fun={() => {
              // this function will be used to reset the values of the sides of the triangle
              setSide1(90);
              setSide2(90);
              setSide3(90);
              setResult("Scalene");
            }}
          >
            <ScaleneIcon />
          </BtnIcon>

          <BtnIcon
            fun={() => {
              setSide1(90);
              setSide2(90);
              setSide3(50);
              setResult("Isosceles");
            }}
          >
            <IsocelesIcon />
          </BtnIcon>

          <BtnIcon
            fun={() => {
              setSide1(50);
              setSide2(70);
              setSide3(90);
              setResult("Equilateral");
            }}
          >
            <EquilateralIcon />
          </BtnIcon>
        </aside>
      </form>
      <div className="triangles-type">
        {result} // this div will be used to display the result of the triangle
      </div>

      <div className="trianglesImg">
        {result === "Equilateral" ? ( //if the result is equilateral then show the equilateral image
          <img src={equilateral} alt="equilateral" className="triangle" />
        ) : result === "Isosceles" ? ( //if the result is isosceles then show the isosceles image
          <img src={isosceles} alt="isosceles" className="triangle" />
        ) : result === "Scalene" ? ( //if the result is scalene then show the scalene image
          <img src={scalene} alt="scalene" className="triangle" />
        ) : null}
      </div>
    </div>
  );
};

export default Triangle;
