import './Inicio.css';
import Mulher from './assets/mulher_inicio.png'

function Inicio() {
  return (
    <div className="Inicio">
      
      {/* Barra de Navegação */}
      <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
            <img className="img-fluid" 
              src={`${process.env.PUBLIC_URL}/logo/logo-white.png`} width = "50" alt="logo"/>
            </a>
            <div class="collapse navbar-collapse">
                <ul>
                  <h2 class="title">Stag.io</h2>
                </ul>
            </div>
            <form class="d-flex">
              <button class="btn btn-dark buttonLoggin" type="submit">Login</button>
            </form>
        </nav>


        {/* Container que aloca a página */}
        <div class="container-fluid margin">
            <div class="container margin">
                <div class="row">
                    <div class="col-lg-8 marginTop">
                      <div class="container">
                        <h3 class="subTitle">
                            Qual a sua Busca?
                        </h3>
                        <div class="row">
                          <div class="col-xs-6 col-sm-6 col-md-6">
                            <a href="" class="btn btn-lg btn-outline-dark btn-block colorButton">Estagiar</a>
                          </div>
                          <div class="col-xs-6 col-sm-6 col-md-6">
                            <a href="" class="btn btn-lg btn-outline-dark btn-block colorButton">Estagiários</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div class="col-lg-4">
                    <img src={Mulher} class="imagem"/>
                  </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Inicio;
