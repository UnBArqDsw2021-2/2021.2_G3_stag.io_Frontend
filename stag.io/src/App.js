import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio";
import CadastroCandidato from "./pages/Cadastro/cadastroCandidato";
import CadastroEmpresa from "./pages/Cadastro/cadastroEmpresa";
import {AuthProvider} from "./contexts/auth"



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>  
        
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/cadastroCandidato" element={<CadastroCandidato/>}></Route>
        <Route path="/cadastroEmpresa" element={<CadastroEmpresa/>}></Route>
        
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
