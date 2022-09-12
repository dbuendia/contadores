import React from "react";
import { actions } from "../constants.js";
import Button from "../components/Button.jsx";

function Counter({ id, title, count, updateCounters }) {
  return (
    <div className="counter">
      <p>{title}</p>
      <div>{count}</div>
      {/* En onClick pasamos una función anónima y no la llamada a esa función. Porque el componente se rerenderizaría cada vez y entraríamos en un bucle infinito */}
      <Button
        type="primary"
        children={"+"}
        onClick={() => updateCounters(id, actions.add)}
      />
      <Button
        type="primary"
        children={"-"}
        onClick={() => updateCounters(id, actions.subtract)}
      />
      <Button
        type="danger"
        children={"Reset"}
        onClick={() => updateCounters(id, actions.reset)}
      />
      {/* <button onClick={(e) => updateCounters(id, e, actions.add)}>+</button>
      <button onClick={(e) => updateCounters(id, e, actions.subtract)}>
        -
      </button>
      <button onClick={(e) => updateCounters(id, e, actions.reset)}>
        Reset
      </button> */}
    </div>
  );
}

export default Counter;
