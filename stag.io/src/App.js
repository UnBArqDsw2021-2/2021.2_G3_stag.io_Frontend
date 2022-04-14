import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Children, useContext } from "react";

import Inicio from "./pages/Inicio/Inicio";
import CadastroCandidato from "./pages/Cadastro/cadastroCandidato";
import CadastroEmpresa from "./pages/Cadastro/cadastroEmpresa";
import {AuthProvider, AuthContext} from "./contexts/auth";




function App() {

  //Função para definir as rotas privadas do navegador, para utiliza-la basta colocar <Private></Private>
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext);

    if(loading){
      return <div className="loading">Carregando...</div>;
    }

    if(!authenticated){
      return <Navigate to="/" />
    }

    return children
  }

  return (
    <div className="App">
      <AuthProvider>
        <Routes>  
        
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/cadastroCandidato" element={
          //<Private>
            <CadastroCandidato/> //Exemplo de uso da função Private
          //</Private> 
        }></Route>
        <Route path="/cadastroEmpresa" element={<CadastroEmpresa/>}></Route>
        
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
