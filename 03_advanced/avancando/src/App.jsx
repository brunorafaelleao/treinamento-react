import lindkedin from "./assets/linkedin.png";
import "./App.css";
import Data from "./components/Data";

function App() {
  return (
    <>
      <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Teste de app</h1>
        <p>Inserindo imagens pela pasta public:</p>
        {/* imagem inserida pela pasta public */}
        <img src="../public/facebook.png" alt="logo-facebook" />
        <p>inserindo imagem pelo assets:</p>
        {/* imagem importada do assets*/}
        <img src={lindkedin} alt="logo-linkedin" />
        {/* importando o componente com useState */}
        <Data />
      </div>
    </>
  );
}

export default App;
