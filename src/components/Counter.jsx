import React from "react";
import { actions } from "../constants.js";
import Button from "../components/Button.jsx";

function Counter({
  id,
  title,
  count,
  updateCounters,
  showOrHideCounter,
  show,
}) {
  React.useEffect(() => {
    console.warn(
      "El componente Counter (id: " + id + ") ha sido montado en la aplicación."
    );
  }, []);

  React.useEffect(() => {
    console.log(
      "La cuenta del componente Counter (id: " + id + ") ha cambiado de valor"
    );
  }, [count]);

  React.useEffect(() => {
    console.log(
      "El componente (id: " +
        id +
        ") ha cambiado su visibilidad a " +
        show +
        "."
    );
  }, [show]);

  return (
    <div className={show === true ? "counter" : "disabled"}>
      <p>{title}</p>
      <div>{count}</div>
      {/* En onClick pasamos una función anónima y no la llamada a esa función. Porque el componente se rerenderizaría cada vez y entraríamos en un bucle infinito */}
      <Button
        id={id}
        type="primary"
        children={"+"}
        onClick={() => updateCounters(id, actions.add)}
      />
      <Button
        id={id}
        type="primary"
        children={"-"}
        onClick={() => updateCounters(id, actions.subtract)}
      />
      <Button
        id={id}
        type="primary"
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
      <Button
        type="danger"
        children={"Hide"}
        onClick={() => showOrHideCounter(id, actions.hide)}
      />
    </div>
  );
}

export default Counter;
