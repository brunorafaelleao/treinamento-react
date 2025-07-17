import React from "react";
import { useState } from "react";

const Data = () => {
  let someData = 10;
  const [number, setNumber] = useState(15);

  return (
    <>
      <div>
        <p>valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Mudar State</button>
      </div>
    </>
  );
};

export default Data;
