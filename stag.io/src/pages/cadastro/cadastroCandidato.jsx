import './cadastroCandidato.css';
import Usuario from './assets/cadastro_usuario.png'

function CadastroCandidato() {
  return (
    <div className="CadastroCandidato">
      
      {/* Barra de Navegação */}
      <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
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
                <h4>Cadastro de Usuário</h4>
              </div>
          </div>
      </div>
      <div className="container">
          <div className="content-row">
              <div className="col-md-4">
                  <input className="text-box-type-1-user" id="text1" placeholder="Nome"></input>
                  <input className="text-box-type-1-user" id="text1" placeholder="CPF"></input>
                  <input className="text-box-type-1-user" id="text1" placeholder="Senha"></input>
                  <input className="text-box-type-2-user" id="text1" placeholder="Descrição"></input>
                  <div className="container-button">
                      <button class="btn btn-primary user_btn" type="button">Cadastrar</button>
                  </div>
              </div>
              <div className="col-md-4">
                  <input className="text-box-type-1-user" id="text1" placeholder="Localização"></input>
                  <input className="text-box-type-1-user" id="text1" placeholder="Escolaridade"></input>
                  <input className="text-box-type-1-user" id="text1" placeholder="Currículo"></input>
                  <input className="text-box-type-1-user" id="text1" placeholder="#python"></input>
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
