import { useId } from "react";
const FormGroup = ({ name, state, setState }) => {
  const side = useId();
  return (
    <div className="form-group">
      <label htmlFor={side}>{name}</label>
      <input
        type="number"
        className="form-control"
        id={side}
        value={state}
        onChange={(e) => setState(Number(e.target.value))}
        /* onChange={(e) => setSide2(e.target.value)} */
      />
    </div>
  );
};

export default FormGroup;
