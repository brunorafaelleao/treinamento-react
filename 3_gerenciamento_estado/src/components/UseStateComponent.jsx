import React from "react";
import { useState } from "react";

const UseStateComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default UseStateComponent;
