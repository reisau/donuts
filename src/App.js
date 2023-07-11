import Detalhes from "./page/Detalhes/Detalhes";
import Home from "./page/Home/Home";
import StyledGlobal, { CorFundo } from "./styledGlobal";


function App() {
  return (
    <>
      <CorFundo>
        <StyledGlobal />
        <Home/>
      </CorFundo>
      
      {/* <Detalhes/> */}
    </>
  );
}

export default App;
