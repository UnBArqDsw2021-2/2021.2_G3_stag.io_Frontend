import React, { useContext, useEffect } from "react";
import "./detalhesEmpresa.css";
import Vaga from "../../components/Vaga";
import NavbarEmp from "../../components/navBarEmp/NavBarEmp";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

const DetalhesEmpresa = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user);
  return (
    <div className="detalhes-empresa">
      <NavbarEmp></NavbarEmp>

      <div className="company">
        <div className="company-desc">
          <h1 className="title-candidate"> {user.nomeEmpresa} </h1>
          <div className="description">
            <div className="text-font"> Descrição </div>
            <div> {user.descricaoEmpresa} </div>
          </div>
          <div className="description">
            <div className="text-font"> Localização </div>
            <div> {user.siteEmpresa} </div>
          </div>
          <div className="description">
            <div className="text-font"> Site da Empresa </div>
            <div> {user.siteEmpresa} </div>
          </div>
        </div>

        <div className="separateBar"></div>

        <div className="company-desc">
          {user.vagasEmpresa.map((vaga) => (
            <Vaga info={vaga} />
          ))}
          <button
            onClick={() => {
              navigate("/vagaEmpresa");
            }}
            type="button"
          >
            {" "}
            teste{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalhesEmpresa;
