import React, { useEffect } from "react";
import "./index.css";
import NavBarLogo from "../../components/NavBarLogo";
import Vaga from "../../components/Vaga";


const DetalhesCandidato = (props) => {
    const { values }= props;


    const getEmpresa = (id) => {

    }

    useEffect(()=>{ 
        // getEmpresa(values.id);
    },[])

    return(
        <div className="container">
            <h1 className="title-candidate"> Nome da Empresa </h1>

            <div className="company">
                <div className="company-desc">
                    <div className="description">
                        <div className="text-font"> Descrição </div>
                        <div> {values. desc} </div>
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