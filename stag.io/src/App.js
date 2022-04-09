import "./App.css";
import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio";
import CadastroCandidato from "./pages/Cadastro/cadastroCandidato";
import CadastroEmpresa from "./pages/Cadastro/cadastroEmpresa";


function App() {
  return (
    <div className="App">
      <Routes>
      
      <Route path="/" element={<Inicio/>}></Route>
      <Route path="/cadastroCandidato" element={<CadastroCandidato/>}></Route>
      <Route path="/cadastroEmpresa" element={<CadastroEmpresa/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
