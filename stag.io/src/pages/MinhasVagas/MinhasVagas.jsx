import React from "react";
import './MinhasVagas.css';
import Navbar from "../../components/navBar/NavBar"
import Card from "../../components/Card/Card"

function MinhasVagas() {

    var myArray = ['#python', '#data', '#bi']

    return (
        <div className="MinhasVagas">
            <Navbar></Navbar>
            {/* Container que aloca a página */}
            <h1 className="subTitle_minhas_vagas">
                Minhas Vagas
            </h1>

            <div className="content-column1_minhas_vagas">
                <Card tag={myArray} title="Cientista de Dados" company="Empresa DadosNature" proximaPagina={"SituacaoVaga"}></Card>
            </div>

        </div>
    );
}

export default MinhasVagas;
