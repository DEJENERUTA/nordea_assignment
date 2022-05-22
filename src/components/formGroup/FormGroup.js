import { useId } from "react"; // this snippet from src/components/triangle/Triangle.js:
import "./FormGroup.css";
const FormGroup = ({ name, state, setState }) => {
  const side = useId(); // this variable will be used to store the value of the side of the triangle
  return (
    <div className="form-group">
      <label htmlFor={side}>{name}</label> // this label will be used to display
      the name of the side of the triangle
      <input // this input will be used to get the values of the sides of the triangle
        name={name}
        type="range"
        step={10} // this variable will be used to set the step of the input to 10 (the value of the side of the triangle will be in the range of 0 to 100)
        min="0"
        max="100"
        className="form-control"
        id={side} // this variable will be used to store the value of the side of the triangle
        value={state} // this variable will be used to store the value of the side of the triangle
        onChange={(e) => setState(Number(e.target.value))} // this function will be used to set the values of the sides of the triangle
      />
      <span>{state}</span> // this span will be used to display the values of
      the sides of the triangle
    </div>
  );
};

export default FormGroup;
