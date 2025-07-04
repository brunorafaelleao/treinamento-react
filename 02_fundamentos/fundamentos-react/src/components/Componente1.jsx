/*Aqui temos um modelo de um componente que será um componente pai*/

//importação do componente filho
import Componente1_1 from "./Componente1_1";

//função criada com rafce
const Componente1 = () => {
  return (
    <>
      <div>
        <h2>Eu sou um componente Pai</h2>
        <p>Terei outros componentes como filho</p>
      </div>

      {/* aqui vai entra o componente filho */}
      <Componente1_1 />
    </>
  );
};

//exportação da função (componente pai)
export default Componente1;
