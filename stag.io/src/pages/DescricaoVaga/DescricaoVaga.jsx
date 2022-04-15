import React from "react";
import './DescricaoVaga.css';
import '../SituacaoVaga/SituacaoVaga.css'
import Navbar from "../../components/navBar/NavBar"

function DescricaoVaga() {
    return (
        <div className="detalhes-candidato">
            <Navbar></Navbar>
            {/* Container que aloca a página */}
            <h1 className="subTitle_descricao_vagas">
                Engenheiro de Dados
            </h1>
            <div className="content-row1_situacao_vagas">
                <div className="content-column2_situacao_vagas">

                    {/* Começo Descrição */}
                    <h2 className="localizacao_situacao_vagas">
                        Localização
                    </h2>
                    <h2 className="localizacao-description_situacao_vagas">
                        Remoto
                    </h2>

                    {/* Começo Carga horária */}
                    <h2 className="carga-horaria_situacao_vagas">
                        Carga Horária
                    </h2>
                    <h2 className="carga-horaria-description_situacao_vagas">
                        20h - Flexível
                    </h2>

                    {/* Começo Escolaridade */}
                    <h2 className="escolaridade_situacao_vagas">
                        Escolaridade
                    </h2>
                    <h2 className="escolaridade-description_situacao_vagas">
                        Ensino Superior incompleto
                    </h2>

                    {/* Começo Site*/}
                    <h2 className="site_situacao_vagas">
                        Site
                    </h2>
                    <h2 className="site-description_situacao_vagas">
                        https://www.google.com.br/
                    </h2>

                    {/* Começo Descrição */}
                    <h2 className="descricao_situacao_vagas">
                        Descrição
                    </h2>
                    <h2 className="descricao-description_situacao_vagas">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ex at leo feugiat pretium. Nullam eu dapibus elit, volutpat aliquam urna. Vestibulum semper erat vel dui dictum vehicula
                    </h2>
                </div>
                <div className="content-column2_situacao_vagas">

                    {/* Começo Valor Bolsa */}

                    <h2 className="valor-bolsa-description_situacao_vagas">
                        Valor da bolsa: R$ 1.200,00
                    </h2>

                    {/* Começo Requisitos */}
                    <h2 className="requisitos_situacao_vagas">
                        Requisitos
                    </h2>
                    <h2 className="requisitos-description_situacao_vagas">
                        <ul>
                            <li>Lorem ipsum dolor sit amet;</li>
                            <li>Consectetur adipiscing elit;</li>
                            <li>Nulla convallis ex at leo feugiat pretium;</li>
                            <li>Nullam eu dapibus elit, volutpat aliquam urna. Vestibulum semper erat vel dui dictum vehicula;</li>
                        </ul>
                    </h2>

                    {/* Começo Privilegios */}
                    <h2 className="privilegios_situacao_vagas">
                        Privilegios
                    </h2>
                    <h2 className="privilegios-description_situacao_vagas">
                        <ul>
                            <li>Lorem ipsum dolor sit amet;</li>
                            <li>Consectetur adipiscing elit;</li>
                            <li>Nulla convallis ex at leo feugiat pretium;</li>
                            <li>Nullam eu dapibus elit, volutpat aliquam urna. Vestibulum semper erat vel dui dictum vehicula;</li>
                        </ul>
                        <div className="container-button_descricao_vaga">
                            <button className="btn btn-primary user_btn" type="button">Me candidatar</button>
                        </div>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default DescricaoVaga;
