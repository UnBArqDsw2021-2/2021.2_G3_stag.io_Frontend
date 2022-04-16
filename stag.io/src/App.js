import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Children, useContext } from "react";

import DescricaoVaga from "./pages/DescricaoVaga/DescricaoVaga";
import SituacaoVaga from "./pages/SituacaoVaga/SituacaoVaga";
import MinhasVagas from "./pages/MinhasVagas/MinhasVagas";
import Vagas from "./pages/Vagas/Vagas";
import Inicio from "./pages/Inicio/Inicio";
import CadastroCandidato from "./pages/Cadastro/cadastroCandidato";
import CadastroEmpresa from "./pages/Cadastro/cadastroEmpresa";
import { AuthProvider, AuthContext } from "./contexts/auth";
import NavBarLogo from "./components/NavBarLogo";
import DetalhesCandidato from "../src/pages/DetalhesCandidato";
import DetalhesEmpresa from "../src/pages/DetalhesEmpresa";
import VagaEmpresa from "../src/pages/VagaEmpresa";

function App() {
  //Função para definir as rotas privadas do navegador, para utiliza-la basta colocar <Private></Private>
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route
            path="/cadastroCandidato"
            element={<CadastroCandidato />}
          ></Route>
          <Route path="/cadastroEmpresa" element={<CadastroEmpresa />}></Route>

          <Route
            path="/detalhesCandidato"
            element={
              //<Private>
              <DetalhesCandidato />
              //</Private>
            }
          ></Route>
          <Route
            path="/detalhesEmpresa"
            element={
              //<Private>
              <DetalhesEmpresa />

              //</Private>
            }
          ></Route>
          <Route
            path="/vagaEmpresa"
            element={
              //<Private>
              <VagaEmpresa />
              //</Private>
            }
          ></Route>

          <Route path="/DescricaoVaga" element={<DescricaoVaga />}></Route>
          <Route path="/SituacaoVaga" element={<SituacaoVaga />}></Route>
          <Route path="/MinhasVagas" element={<MinhasVagas />}></Route>
          <Route path="/Vagas" element={<Vagas />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
