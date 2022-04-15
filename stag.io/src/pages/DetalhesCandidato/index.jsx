import React from "react";
import "./index.css";

const areasInteresse = ['#python','#bi','#sql']

const DetalhesCandidato = () => {
  return (
    <div className="detalhesCandidato_detalhes-candidato">
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
      {/* Container que aloca a página */}
      <h1 className="detalhesCandidato_subTitle1">Nome do candidato</h1>
      <div className="detalhesCandidato_content-row1">
        <div className="detalhesCandidato_content-column1">
          {/* Começo Descrição */}
          <h2 className="detalhesCandidato_text_detalhes_candidato">
            Descrição
          </h2>
          <h2 className="detalhesCandidato_text-description1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis ex at leo feugiat pretium. Nullam eu dapibus elit,
            volutpat aliquam urna. Vestibulum semper erat vel dui dictum
            vehicula
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
          <h2 className="detalhesCandidato_text-description1">Brasília - DF</h2>
          {/* Começo Área de interesse */}
          <h2 className="detalhesCandidato_text_detalhes_candidato">
            Área de interesse
          </h2>
          <div className="detalhesCandidato_content-row1">
            {areasInteresse.map((item, index) => (
              <div className="detalhesCandidato_text-box-type1-2" id="">
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
