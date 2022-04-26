import { useId } from "react";

const FormGroup = ({ name, state, setState }) => {
  const side = useId();

  return (
    <div className="form-group">
      {/* <div>
        {name}
        <input
          type="range"
          min="0"
          max="100"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="slider"
          id={side}
        />
      </div> */}
      <label htmlFor={side}>{name}</label>
      <input
        type="range"
        min="0"
        max="100"
        className="form-control"
        id={side}
        value={state}
        onChange={(e) => setState(Number(e.target.value))}
      />
    </div>
  );
};

export default FormGroup;
