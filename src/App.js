import { useState } from "react";
import Counter from "./components/Counter.jsx";
import Header from "./components/Header.jsx";

function App() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);

  let sum = count1 + count2 + count3;

  return (
    <div className="App">
      <Header />
      <div className="counter-container">
        <Counter number="1" count={count1} add={setCount1} />
        <Counter number="2" count={count2} add={setCount2} />
        <Counter number="3" count={count3} add={setCount3} />
      </div>
      <div className="counter-sum">
        <p>Suma de los contadores: {sum}</p>
      </div>
    </div>
  );
}

export default App;
