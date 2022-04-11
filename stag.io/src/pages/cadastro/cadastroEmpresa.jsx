import './cadastroCandidato.css';
import './cadastroEmpresa.css';
import Empresa from './assets/cadastro_empresa.png'
import React, {useState} from 'react';

function CadastroEmpresa() {
  const [nome,setNome] = useState("");
  const [cnpj,setCnpj] = useState("");
  const [senha,setSenha] = useState("");
  const [descricao,setDescricao] = useState("");
  const [siteProp,setSiteProp] = useState("");
  const [localizacao,SetLocalizacao] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("Submit", {nome, cnpj, senha, descricao, siteProp, localizacao});
  };
  
  return (
    <div className="CadastroEmpresa">
      
       
      {/* Barra de Navegação */}
      <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
            <img className="img-fluid" 
              src={`${process.env.PUBLIC_URL}/logo/logo-white.png`} width = "50" alt="logo"/>
            </a>
            <div className="collapse navbar-collapse">
                <ul>
                  <h2 className="title">Stag.io</h2>
                </ul>
            </div>
        </nav>

      <div className="container margin_container">
          <div className="row">
              <div className="col sub_title_user">
                <h4>Cadastro de Empresa</h4>
              </div>
          </div>
      </div>
      <div className="container-empresa">
          <div className="content-row">
              <div className="col-md-4">
                 <img src={Empresa} className="imagem_empresa"/>
              </div>
              <div className="col-md-4">
                  <input className="text-box-type-1-user" id="Nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                  <input className="text-box-type-1-user" id="CNPJ" placeholder="CNPJ" value={cnpj} onChange={(e) => setCnpj(e.target.value)}></input>
                  <input className="text-password-user" id="Senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                  <input className="text-box-type-2-user" id="Descrição" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}></input>
                  <div className="container-button">
                      <button className="btn btn-primary user_btn" type="button" onClick={handleSubmit}>Cadastrar </button>
                  </div>
              </div>
              <div className="col-md-4">
                  <input className="text-box-type-1-user" id="text1" placeholder="Localização" value={localizacao} onChange={(e) => SetLocalizacao(e.target.value)}></input>
                  <input className="text-box-type-1-user" id="text1" placeholder="Site próprio" value={siteProp} onChange={(e) => setSiteProp(e.target.value)}></input>
              </div>
          </div>
      </div>

    </div>
  );
}

export default CadastroEmpresa;
