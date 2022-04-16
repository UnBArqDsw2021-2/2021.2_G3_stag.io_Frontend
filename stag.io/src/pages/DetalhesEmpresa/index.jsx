import React, { useEffect } from "react";
import "./detalhesEmpresa.css";
import Vaga from "../../components/Vaga";

import Navbar from "../../components/navBar/NavBar"

const DetalhesEmpresa = () =>
  //props
  {
    //const { values }= props;

    const getEmpresa = () => {};
    return (
      <div className="detalhes-empresa">
        <Navbar/>

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