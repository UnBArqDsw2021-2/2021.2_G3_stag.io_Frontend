import React from "react";
import NavBar from "../../components/NavBar";
import './index.css';

const DetalhesCandidato = () => {

    return(
        <div className="detalhes-candidato">

            {/* Container que aloca a página */}
            <h1 className="subTitle1">
                Nome do candidato
            </h1>
            <div className="content-row1">
                    <div className="content-column1">
                        {/* Começo Descrição */}
                        <h2 className="text1">
                            Descrição
                        </h2>
                        <h2 className="text-description1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ex at leo feugiat pretium. Nullam eu dapibus elit, volutpat aliquam urna. Vestibulum semper erat vel dui dictum vehicula
                        </h2>

                        {/* Começo Escolaridade */}
                        <h2 className="text1">
                            Escolaridade
                        </h2>
                        <h2 className="text-description1">
                            Ensino médio
                        </h2>
                        {/* Começo Localização */}
                        <h2 className="text1">
                            Localização
                        </h2>
                        <h2 className="text-description1">
                            Brasília - DF
                        </h2>
                        {/* Começo Área de interesse */}
                        <h2 className="text1">
                            Área de interesse
                        </h2>
                        <div className="content-row1">
                        <div className="text-box-type1-2" id="" >#python</div>
                        <div className="text-box-type1-2" id="" >#data</div>
                        <div className="text-box-type1-2" id="" >#bi</div>
                        </div>
                        {/* Começo Currículo */}
                        <h2 className="text1">
                            Currículo
                        </h2>
                        <div className="text-box-type1-2" id="">Arquivo</div>
                    </div>

            </div>
        </div>
    );
}