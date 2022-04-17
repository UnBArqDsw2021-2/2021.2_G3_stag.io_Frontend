import React, { useContext } from "react";
import "./DescricaoVaga.css";
import Navbar from "../../components/navBar/NavBar";
import NavbarEmp from "../../components/navBarEmp/NavBarEmp";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

function DescricaoVaga() {
  const { user } = useContext(AuthContext);
  const { state } = useLocation();

  return (
    <div className="detalhes-candidato">
      {user.tipoUsuario === "empresa" ? (
        <NavbarEmp></NavbarEmp>
      ) : (
        <Navbar></Navbar>
      )}

      {/* Container que aloca a página */}
      <h1 className="subTitle_descricao_vagas">{`${state.tituloVaga} / ${state.nomeEmpresa}`}</h1>
      <div className="content-row1_situacao_vagas">
        <div className="content-column2_situacao_vagas">
          {/* Começo Descrição */}
          <h2 className="localizacao_situacao_vagas">Localização</h2>
          <h2 className="localizacao-description_situacao_vagas">
            {`${state.uf} / ${state.cidade} - ${
              state.modeloTrabalho === "R" ? "Remoto" : "Presencial"
            }`}
          </h2>
          {/* Começo Carga horária */}
          <h2 className="carga-horaria_situacao_vagas">Carga Horária</h2>
          <h2 className="carga-horaria-description_situacao_vagas">
            {state.cargaHoraria}h
          </h2>
          {/* Começo Escolaridade */}
          <h2 className="escolaridade_situacao_vagas">Escolaridade</h2>
          <h2 className="escolaridade-description_situacao_vagas">
            {state.nomeEscolaridade}
          </h2>
          {/* Começo Site*/}
          <h2 className="site_situacao_vagas">Site</h2>
          <h2 className="site-description_situacao_vagas">
            {state.siteEmpresa}
          </h2>
          {/* Começo Descrição */}
          <h2 className="descricao_situacao_vagas">Descrição</h2>
          <h2 className="descricao-description_situacao_vagas">
            {state.descricaoVaga}
          </h2>
        </div>
        <div className="content-column2_situacao_vagas">
          {/* Começo Valor Bolsa */}

          <h2 className="valor-bolsa-description_situacao_vagas">
            {`Valor da bolsa: R$ ${state.bolsa},00`}
          </h2>

          {/* Começo Requisitos */}
          <h2 className="requisitos_situacao_vagas">Requisitos</h2>
          <h2 className="requisitos-description_situacao_vagas">
            <ul>
              <li>{state.requisitos}</li>
            </ul>
          </h2>

          {/* Começo Privilegios */}
          <h2 className="privilegios_situacao_vagas">Privilegios</h2>
          <h2 className="privilegios-description_situacao_vagas">
            <ul>
              <li>{state.privilegios}</li>
            </ul>
            <div className="container-button_descricao_vaga">
              {user.tipoUsuario === "" ? (
                <button className="btn btn-primary user_btn" type="button">
                  Me candidatar
                </button>
              ) : (
                <></>
              )}
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DescricaoVaga;
