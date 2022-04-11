import React, { useEffect } from "react";
import "./index.css";
import NavBarLogo from "../../components/NavBarLogo";
import Vaga from "../../components/Vaga";


const DetalhesCandidato = (props) => {

    return(
        <div className="container">
            <h1 className="title-candidate"> Nome da Empresa </h1>

            <div className="company">
                <div className="company-desc">
                    <div className="description">
                        <div className="text-font"> Descrição </div>
                        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ex at leo feugiat pretium. Nullam eu dapibus elit, volutpat aliquam urna. Vestibulum semper erat vel dui dictum vehicula </div>
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

                <div className="company-desc">
                    <Vaga />
                    <Vaga />
                </div>
            </div>
        </div>
    );
}

export default DetalhesCandidato;