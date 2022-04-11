import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetalhesCandidato from "../src/pages/DetalhesCandidato";
import DetalhesEmpresa from "../src/pages/DetalhesEmpresa";
import VagaEmpresa from "../src/pages/VagaEmpresa";

import Inicio from "./pages/Inicio/Inicio";
import NavBarLogo from "./components/NavBarLogo";

function App() {
  return (
    <div className="App">
      {/* <NavBarLogo/> */}
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/detalhes-candidato" element={<DetalhesCandidato/>}></Route>
        <Route path="/detalhes-empresa" element={<DetalhesEmpresa/>}></Route>
        <Route path="/vaga-empresa" element={<VagaEmpresa/>}></Route>

      </Routes>
    </div>
  );
}

export default App;