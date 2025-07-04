import "./App.css";
import Componente1 from "./components/Componente1";
import PrimeiroComponente from "./components/PrimeiroComponente";

function App() {
  //comentário
  return (
    <>
      <h1>Malária Manaus</h1>
      <h2>Semsa Manaus</h2>
      {/* vou colocar um comentário */}

      {/* importação de um componente qualquer */}
      <PrimeiroComponente />
      {/* importação do componente pai criado */}
      <Componente1 />
    </>
  );
}

export default App;
