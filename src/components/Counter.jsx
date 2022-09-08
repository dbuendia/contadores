import React from "react";
import { actions } from "../constants.js";

function Counter({ id, title, count, updateCounters }) {
  return (
    <div className="counter">
      <p>{title}</p>
      <div>{count}</div>
      {/* Pasamos una función anónima y no la llamada a esa función. Porque el componente se rerenderizaría cada vez y entraríamos en un bucle infinito */}
      <button onClick={(e) => updateCounters(id, e, actions.add)}>+</button>
      <button onClick={(e) => updateCounters(id, e, actions.subtract)}>
        -
      </button>
      <button onClick={(e) => updateCounters(id, e, actions.reset)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
