import "./App.css";
import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio";
import CadastroCandidato from "./pages/cadastro/cadastroCandidato";
import Login from "./pages/Login/login";

function App() {
  return (
    <div className="App">
      <Routes>
      
      <Route path="/" element={<Inicio/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/cadastroCandidato" element={<CadastroCandidato/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
