import React from "react";
import './Vagas.css';
import Navbar from "../../components/navBar/NavBar";
import Card from "../../components/Card/Card";
import Filtro from "../../components/Filtro/Filtro";

function MinhasVagas() {

    var myArray = ['#python', '#data', '#bi']

    return (
        <div className="detalhes-candidato">
            <Navbar></Navbar>
            {/* Container que aloca a página */}
            <h1 className="subTitle_vagas">
                Vagas
            </h1>

            <Filtro></Filtro>

        </div>
    );
}

export default MinhasVagas;
