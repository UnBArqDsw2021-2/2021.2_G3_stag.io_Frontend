import React from "react";
import './MinhasVagas.css';
import Navbar from "../navBar/NavBar"
import Card from "../Vagas/Card"

function MinhasVagas() {

    var myArray = ['#python', '#data', '#bi']

    return (
        <div className="detalhes-candidato">
            <Navbar></Navbar>
            {/* Container que aloca a página */}
            <h1 className="subTitle">
                Minhas Vagas
            </h1>

            <div className="content-column1">
                <Card tag={myArray} title="Cientista de Dados" company="Empresa DadosNature"></Card>
            </div>

        </div>
    );
}

export default MinhasVagas;
