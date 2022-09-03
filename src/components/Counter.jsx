import React from "react";
import { useState } from "react";

function Counter({ number }) {
  let [count, setCount] = useState(0);

  function handleSum() {
    // Why count++ doesn't work!? TEST
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <p>Contador {number}</p>
      <div>{count}</div>
      <button onClick={handleSum}>+1</button>
    </div>
  );
}

export default Counter;
