import React from "react";
import NavBar from "../../components/NavBar";
import './index.css';

const VagaEmpresa = () => {

    return(
        <div className="vaga-empresa">

            {/* Container que aloca a página */}
                <h1 className="subTitle">
                    Adicionar/Editar vaga
                </h1>
                    <div className="content-row">
                            <div className="content-column">
                                <h2 className="text">
                                    Título:
                                </h2>
                                <input className="text-box-type-1" id="text1" placeholder=""></input>
                                <h2 className="text">
                                    Descrição:
                                </h2>
                                <input className="text-box-type-2" id="text2"></input>
                                <h2 className="text">
                                    Privilégios:
                                </h2>
                                <input className="text-box-type-2" id="text3"></input>
                            </div>
                            <div className="content-column">
                                <h2 className="text">
                                    Carga horária:
                                </h2>
                                <input className="text-box-type-1" id="text4" placeholder=""></input>
                                <h2 className="text">
                                    Valor da bolsa:
                                </h2>
                                <input className="text-box-type-1" id="text5" placeholder=""></input>
                                <h2 className="text">
                                    Requisitos:
                                </h2>
                                <input className="text-box-type-2" id="text6"></input>
                            </div>
                            <div className="content-column">
                                <h2 className="text">
                                    Regime
                                </h2>
                                <select className="select-list-1" id="List">
                                    <option value={"1"}>Remoto</option>
                                    <option value={"2"}>Presencial</option>
                                    <option value={"2"}>Semi-presencial</option>
                                </select>
                                <h2 className="text">
                                    Escolaridade
                                </h2>
                                <select className="select-list-2" id="List1">
                                    <option value={"3"}>Ensino Superior</option>
                                    <option value={"4"}>Ensino Médio</option>
                                    <option value={"5"}>Ensino Fundamental</option>
                                </select>
                                <div className="button-row">
                                    <button className="btn btn-secondary d-block w-100 buttonColor" type="submit">Adicionar</button>

                                </div>
                            </div>
                    </div>
        </div>
    );
}

export default VagaEmpresa;