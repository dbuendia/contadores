import React from "react";

function Counter({ number, count, add }) {
  return (
    <div className="counter">
      <p>Contador {number}</p>
      <div>{count}</div>
      <button onClick={() => add(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;
