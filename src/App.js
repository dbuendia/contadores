import { useState } from "react";
import Counter from "./components/Counter.jsx";
import Header from "./components/Header.jsx";
import countersList from "./counters.js";

function App() {
  // Recibo todo el dataset como un estado
  const [counters, setCounters] = useState(countersList);

  // Tiene que haber un onClick que nos devuelva el ID del contador clicado.
  // Para acceder a un valor de un child desde un parent:
  // Creo una función que reciba un parámetro, la paso como prop al child, y el child la ejecuta con el valor deseado como argumento.
  // Queremos rehacer el dataset, pero cambiando algunos datos:
  function updateCounters(id, e) {
    // Lo recorro todo con map, pero si el id coincide con el recuperado, lo cambio:
    // console.log(e.target.innerText);
    let updatedCounters = counters.map((elem) => {
      if (elem.id === id) {
        if (e.target.innerText === "+1") {
          console.log("sumare +1");
          elem.count = elem.count + 1;
        } else if (e.target.innerText === "-1") {
          console.log("restare -1");
          elem.count = elem.count - 1;
        } else {
          console.log("Reseteo por puta");
          elem.count = 0;
        }
        return elem;
      } else {
        return elem;
      }
    });
    // Por último, llamo a setCounters para actualizar los valores en la UI:
    setCounters(updatedCounters);
  }

  function calculateSum() {
    let sum = 0;
    for (let i = 0; i < counters.length; i++) {
      sum = sum + counters[i].count;
    }
    return sum;
  }

  return (
    <div className="App">
      <Header />
      <div className="counter-container">
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              id={counter.id}
              title={counter.title}
              count={counter.count}
              updateCounters={updateCounters}
            />
          );
        })}
      </div>
      <div className="counter-sum">
        <p>Suma de los contadores: {calculateSum()}</p>
      </div>
    </div>
  );
}

export default App;
