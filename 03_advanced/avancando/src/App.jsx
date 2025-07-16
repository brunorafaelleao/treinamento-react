import { useState } from "react";
import lindkedin from "./assets/linkedin.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Teste de app</h1>
      <p>Inserindo imagens pela pasta public:</p>
      {/* imagem inserida pela pasta public */}
      <img src="../public/facebook.png" alt="logo-facebook" />
      <p>inserindo imagem pelo assets:</p>
      {/* imagem importada do assets*/}
      <img src={lindkedin} alt="logo-linkedin" />
    </>
  );
}

export default App;
