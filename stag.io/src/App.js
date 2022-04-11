import "./App.css";
import { Routes, Route } from "react-router-dom";

import DescricaoVaga from "./pages/DescricaoVaga/DescricaoVaga";
import SituacaoVaga from "./pages/SituacaoVaga/SituacaoVaga";
import Inicio from "./pages/Inicio/Inicio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/DescricaoVaga" element={<DescricaoVaga />}></Route>
        <Route path="/SituacaoVaga" element={<SituacaoVaga />}></Route>
      </Routes>
    </div>
  );
}

export default App;
