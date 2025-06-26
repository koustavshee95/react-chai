import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(5);

  //let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      setcounter(counter + 1);
      //console.log("Button Pressed! add value", counter);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
      //console.log("Button Pressed! remove value", counter);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

      <p>Footer {counter}</p>
    </>
  );
}

export default App;
