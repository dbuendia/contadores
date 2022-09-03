import Counter from "./components/Counter.jsx";
import Header from "./components/Header.jsx";

function App() {
  function createCounters(number) {
    let counterArray = [];
    for (let i = 1; i <= number; i++) {
      counterArray[i] = <Counter number={i} />;
    }
    return counterArray;
  }
  return (
    <div className="App">
      <Header />
      <div className="counter-container">{createCounters(3)}</div>
    </div>
  );
}

export default App;
