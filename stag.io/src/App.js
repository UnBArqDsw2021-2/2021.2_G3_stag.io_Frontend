import "./App.css";
import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
