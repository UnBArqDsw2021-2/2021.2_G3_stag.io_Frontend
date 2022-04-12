import "./App.css";
import { Routes, Route } from "react-router-dom";

import DescricaoVaga from "./pages/DescricaoVaga/DescricaoVaga";
import SituacaoVaga from "./pages/SituacaoVaga/SituacaoVaga";
import MinhasVagas from "./pages/MinhasVagas/MinhasVagas";
import Vagas from "./pages/Vagas/Vagas";
import Inicio from "./pages/Inicio/Inicio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/DescricaoVaga" element={<DescricaoVaga />}></Route>
        <Route path="/SituacaoVaga" element={<SituacaoVaga />}></Route>
        <Route path="/MinhasVagas" element={<MinhasVagas />}></Route>
        <Route path="/Vagas" element={<Vagas />}></Route>
      </Routes>
    </div>
  );
}

export default App;
