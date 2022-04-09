import "./App.css";
import { Routes, Route } from "react-router-dom";
import DetalhesCandidato from "../src/pages/DetalhesCandidato";

import Inicio from "./pages/Inicio/Inicio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/detalhes-candidato" element={<DetalhesCandidato/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
