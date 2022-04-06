import './Inicio.css';
import Mulher from './assets/mulher_inicio.png'

import { useState } from 'react';
import Popup from '../../components/Login/login';



function Inicio() { 
  const [buttonPopup,setButtonPopup] = useState (false);
  
  const handleLogin = (e)=>{
    e.preventDefault();
    setButtonPopup((buttonPopup)=>!buttonPopup)

  };

  console.log (buttonPopup);

  return (
    <div className="Inicio">
      
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
            <form className="d-flex">

              <button className="btn btn-dark buttonLoggin" type="submit" size="sm" onClick={(e) => handleLogin(e)} >
                <h2 className="titleButton">Login</h2>
              </button>
            </form>
        </nav>

        {/* Container que aloca a página */}
        <div className="container-fluid margin">
            <div className="container margin">
                <div className="row">
                    <div className="col-lg-8 marginTop">
                      <div className="container">
                        <h3 className="subTitle">
                            Qual a sua Busca?
                        </h3>
                        <div className="row">
                          <div className="col-xs-6 col-sm-6 col-md-6">
                            <a href="" className="btn btn-lg btn-outline-dark btn-block colorButton">Estagiar</a>
                          </div>
                          <div className="col-xs-6 col-sm-6 col-md-6">
                            <a href="" className="btn btn-lg btn-outline-dark btn-block colorButton">Estagiários</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-4">
                    <img src={Mulher} className="imagem"/>
                  </div>
                </div>
            </div>
        </div>

        {/* Criação de PopUp */}
        <Popup
          trigger={buttonPopup} setTrigger={setButtonPopup}>
        </Popup>

    </div>
  );
}

export default Inicio;
