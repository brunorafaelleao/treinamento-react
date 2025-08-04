import { data } from "./data/data.js";
import { useState } from "react";
import ImcTabela from "./components/ImcTabela.jsx";
import ImcCalc from "./components/ImcCalc.jsx";
import "./App.css";

function App() {
  //funcao pra calcular o IMC
  const calcImc = (e, altura, peso) => {
    e.preventDefault();

    if (!altura || !peso) return;

    //converter altura e peso para float no padrão correto
    const alturaFloat = +altura.replace(",", "."); // substitui vírgula por ponto
    const pesoFloat = +peso.replace(",", "."); // substitui vírgula por ponto

    const imcResultado = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1);
    const valueImc = imcResultado.replace(".", ",");

    alert(`A altura é: ${altura} e o peso é: ${peso} e o IMC é: ${valueImc}`);

    setImc(imcResultado);

    data.forEach((item) => {
      if (imcResultado >= item.min && imcResultado <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    // alert("Função executada!");
  };

  //funcao para resetar a calculadora
  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <div className="container">
        {/* <ImcCalc /> */}
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
        ) : (
          <ImcTabela
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
      </div>
    </>
  );
}

export default App;
