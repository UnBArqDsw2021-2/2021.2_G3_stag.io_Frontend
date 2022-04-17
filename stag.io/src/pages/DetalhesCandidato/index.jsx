import React, { useEffect, useState } from "react";
import Navbar from "../../components/navBar/NavBar"
import "./index.css";

import {api, config} from '../../service/api'

const areasInteresse = ['#python','#bi','#sql']

const DetalhesCandidato = () => {
  const dadosUsuario = JSON.parse(localStorage.getItem('user'))
  console.log(dadosUsuario)
  return (
    <div className="detalhesCandidato_detalhes-candidato">
      <Navbar/>
      {/* Container que aloca a página */}
      <h1 className="detalhesCandidato_subTitle1">{dadosUsuario.nomeCompleto}</h1>
      <div className="detalhesCandidato_content-row1">
        <div className="detalhesCandidato_content-column1">
          {/* Começo Descrição */}
          <h2 className="detalhesCandidato_text_detalhes_candidato">
            Descrição
          </h2>
          <h2 className="detalhesCandidato_text-description1">
            {dadosUsuario.descricaoCandidato}
          </h2>

          {/* Começo Escolaridade */}
          <h2 className="detalhesCandidato_text_detalhes_candidato">
            Escolaridade
          </h2>
          <h2 className="detalhesCandidato_text-description1">Ensino médio</h2>
          {/* Começo Localização */}
          <h2 className="detalhesCandidato_text_detalhes_candidato">
            Localização
          </h2>
          <h2 className="detalhesCandidato_text-description1">{`${dadosUsuario.cidade} - ${dadosUsuario.uf}`}</h2>
          {/* Começo Área de interesse */}
          <h2 className="detalhesCandidato_text_detalhes_candidato">
            Área de interesse
          </h2>
          <div className="detalhesCandidato_content-row1">
            {areasInteresse.map((item, index) => (
              <div key={index} className="detalhesCandidato_text-box-type1-2" id="">
                {item}
              </div>
            ))}
          </div>
          {/* Começo Currículo */}
          <h2 className="detalhesCandidato_text_detalhes_candidato">
            Currículo
          </h2>
          <div className="detalhesCandidato_text-box-type1-2" id="">
            Arquivo
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesCandidato;
