import Button from "./Button";
import "./ImcCalc.modules.css";
import { useState } from "react";

const ImcCalc = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  //validar os dígitos. Se não for número, não aceita
  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  //lidar com a mudança de altura e peso
  const handleAlturaChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setAltura(updatedValue);
  };

  const handlePesoChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setPeso(updatedValue);
  };

  //limpar o formulário
  const clearForm = (e) => {
    e.preventDefault();
    setAltura("");
    setPeso("");
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="altura">Altura:</label>
            <input
              type="text"
              name="altura"
              id="altura"
              placeholder="Ex: 1,70"
              onChange={(e) => handleAlturaChange(e)}
              value={altura}
            />
          </div>
          <div className="form-control">
            <label htmlFor="peso">Peso:</label>
            <input
              type="text"
              name="peso"
              id="peso"
              placeholder="Ex: 70,5"
              onChange={(e) => handlePesoChange(e)}
              value={peso}
            />
          </div>
        </div>

        <div className="action-control">
          <Button id="calc-btn" text="Calcular IMC" />
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
