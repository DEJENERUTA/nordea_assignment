import { useId } from "react";
import "./FormGroup.css";
const FormGroup = ({ name, state, setState }) => {
  const side = useId();
  return (
    <div className="form-group">
      <label htmlFor={side}>{name}</label>
      <input
        name={name}
        type="range"
        step={10}
        min="0"
        max="100"
        className="form-control"
        id={side}
        value={state}
        onChange={(e) => setState(Number(e.target.value))}
      />
      <span>{state}</span>
    </div>
  );
};

export default FormGroup;
