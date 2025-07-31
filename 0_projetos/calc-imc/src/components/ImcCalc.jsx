import Button from "./Button";
import "./ImcCalc.modules.css";

const ImcCalc = () => {
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
            />
          </div>
          <div className="form-control">
            <label htmlFor="peso">Peso:</label>
            <input type="text" name="peso" id="peso" placeholder="Ex: 70,5" />
          </div>
        </div>

        <div className="action-control">
          <Button id="calc-btn" text="Calcular IMC" />
          <Button id="clear-btn" text="Limpar" />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
