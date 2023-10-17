import { useState } from "react";
import { CounterViews } from "./Counter";

export const CounterConteiner = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("there is no more hay stock");
    }
  };

  const restart = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <CounterViews add={add} restart={restart} counter={counter} onAdd={onAdd} />
  );
};

export default CounterConteiner;
