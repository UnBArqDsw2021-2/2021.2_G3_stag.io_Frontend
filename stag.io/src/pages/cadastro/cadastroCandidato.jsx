import './cadastroCandidato.css';
import Usuario from './assets/cadastro_usuario.png'
import React, {useState} from 'react';

function CadastroCandidato() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");

  const [local, setLocal] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [curriculo, setCurriculo] = useState("");
  const [areaInteresse, setAreaInteresse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {nome, cpf, description, password, local, escolaridade, curriculo, areaInteresse});
  }

  return (
    <div className="CadastroCandidato">
      
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
            <div className="container-button-2">
                <button className="btn btn-primary vags_btn" type="button">Vagas</button>
            </div>
        </nav>

      <div className="container margin_container">
          <div className="row">
              <div className="col sub_title_user">
                <h4>Cadastro de Usuário</h4>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="content-row">
              <div className="col-md-4">
                  <input className="text-box-type-1-user" id="text1" placeholder="Nome" value={nome} 
                  onChange={ (e)=> setNome(e.target.value)
                  }></input>
                  <input className="text-box-type-1-user" id="text2" placeholder="CPF" value={cpf} 
                  onChange={ (e)=> setCpf(e.target.value)
                  }></input>
                  <input className="text-password-user" id="text3" placeholder="Senha" value={password}
                  onChange={ (e)=> setPassword(e.target.value)
                  }></input>
                  <input className="text-box-type-2-user" id="text4" placeholder="Descrição" value={description}
                  onChange={ (e)=> setDescription(e.target.value)
                  }></input>
                  <div className="container-button">
                      <button className="btn btn-primary user_btn" type="button" onClick={handleSubmit}>Cadastrar</button>
                  </div>
              </div>
              <div className="col-md-4">
                  <input className="text-box-type-1-user" id="text5" placeholder="Localização" value={local}
                  onChange={ (e)=> setLocal(e.target.value)
                  }></input>
                  <input className="text-box-type-1-user" id="text6" placeholder="Escolaridade" value={escolaridade}
                  onChange={ (e)=> setEscolaridade(e.target.value)
                  }></input>
                  <input className="text-box-type-1-user" id="text7" placeholder="Currículo" value={curriculo}
                  onChange={ (e)=> setCurriculo(e.target.value)
                  }></input>
                  Áreas de interesse
                  <input className="text-box-type-1-user" id="text8" placeholder="#python" value={areaInteresse}
                  onChange={ (e)=> setAreaInteresse(e.target.value)
                  }></input>
              </div>
              <div className="col-md-4">
                 <img src={Usuario} className="imagem_usuario"/>
              </div>
          </div>
      </div>

    </div>
  );
}

export default CadastroCandidato;
