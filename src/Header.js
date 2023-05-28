import { useState } from "react";
import { Form } from "./Components/Form";
import { RealTime } from "./Components/RealTime";
import { Display } from "./Components/Display";

export const Header = () => {
  const [counter, setCounter] = useState(0);
  const [Value, setTextValue] = useState("");
  const [display, setDisplayText] = useState("");
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const addTwo = () => {
    setCounter(counter + 2);
  };
  const resetToZero = () => {
    setCounter(0);
  };

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const onSubmitValue = (event) => {
    event.preventDefault();
    setDisplayText(Value);
  };

  return (
    <>
      <h1>Counter Application</h1>
      <h3>Initial Value: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}> + </button>
      <button onClick={handleDecrement}> -</button>
      <button onClick={addTwo}>+2</button>
      <button onClick={resetToZero}>clear</button>

      <hr />
      {/* <h1>Controlled Input field</h1> */}
      <h1>Props and Component</h1>

      <Form
        textValue={Value}
        onSubmitValue={onSubmitValue}
        handleChange={handleChange}
      />
      <RealTime textValue={Value} />
      <Display textValue={display} />
    </>
  );
};
