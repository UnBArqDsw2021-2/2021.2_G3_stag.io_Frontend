import React, { useEffect } from "react";
import "./detalhesEmpresa.css";
import Vaga from "../../components/Vaga";

const DetalhesEmpresa = () =>
  //props
  {
    //const { values }= props;

    const getEmpresa = () => {};
    return (
      <div className="detalhes-empresa">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/logo/logo-white.png`}
              width="50"
              alt="logo"
            />
          </a>
          <div className="collapse navbar-collapse">
            <ul>
              <h2 className="title">Stag.io</h2>
            </ul>
          </div>
        </nav>

        <div className="company">
          <div className="company-desc">
            <h1 className="title-candidate"> Nome da Empresa </h1>
            <div className="description">
              <div className="text-font"> Descrição </div>
              {/* <div> {values. desc} </div> */}
            </div>
            <div className="description">
              <div className="text-font"> Localização </div>
              <div> Brasília - DF </div>
            </div>
            <div className="description">
              <div className="text-font"> Nome da Empresa </div>
              <div> https://www.google.com.br/ </div>
            </div>
          </div>

          <div className="separateBar"></div>

          <div className="company-desc">
            <Vaga />
            <Vaga />
          </div>
        </div>
      </div>
    );
  };

export default DetalhesEmpresa;