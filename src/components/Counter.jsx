import React from "react";

function Counter({ id, title, count, updateCounters }) {
  return (
    <div className="counter">
      <p>{title}</p>
      <div>{count}</div>
      {/* Pasamos una función anónima y no la llamada a esa función. Porque el componente se rerenderizaría cada vez y entraríamos en un bucle infinito */}
      <button onClick={(e) => updateCounters(id, e)}>+</button>
      <button onClick={(e) => updateCounters(id, e)}>-</button>
      <button onClick={(e) => updateCounters(id, e)}>Reset</button>
    </div>
  );
}

export default Counter;
