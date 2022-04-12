import React from "react";
import './DescricaoVaga.css';
import Navbar from "../navBar/NavBar"

function DescricaoVaga() {
    return (
        <div className="detalhes-candidato">
            <Navbar></Navbar>
            {/* Container que aloca a página */}
            <h1 className="subTitle">
                Engenheiro de Dados
            </h1>
            <div className="content-row1">
                <div className="content-column1">

                    {/* Começo Descrição */}
                    <h2 className="localizacao">
                        Localização
                    </h2>
                    <h2 className="localizacao-description">
                        Remoto
                    </h2>

                    {/* Começo Carga horária */}
                    <h2 className="carga-horaria">
                        Carga Horária
                    </h2>
                    <h2 className="carga-horaria-description">
                        20h - Flexível
                    </h2>

                    {/* Começo Escolaridade */}
                    <h2 className="escolaridade">
                        Escolaridade
                    </h2>
                    <h2 className="escolaridade-description">
                        Ensino Superior incompleto
                    </h2>

                    {/* Começo Site*/}
                    <h2 className="site">
                        Site
                    </h2>
                    <h2 className="site-description">
                        https://www.google.com.br/
                    </h2>

                    {/* Começo Descrição */}
                    <h2 className="descricao">
                        Descrição
                    </h2>
                    <h2 className="descricao-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ex at leo feugiat pretium. Nullam eu dapibus elit, volutpat aliquam urna. Vestibulum semper erat vel dui dictum vehicula
                    </h2>
                </div>
                <div className="content-column2">

                    {/* Começo Valor Bolsa */}

                    <h2 className="valor-bolsa-description">
                        Valor da bolsa: R$ 1.200,00
                    </h2>

                    {/* Começo Requisitos */}
                    <h2 className="requisitos">
                        Requisitos
                    </h2>
                    <h2 className="requisitos-description">
                        <ul>
                            <li>Lorem ipsum dolor sit amet;</li>
                            <li>Consectetur adipiscing elit;</li>
                            <li>Nulla convallis ex at leo feugiat pretium;</li>
                            <li>Nullam eu dapibus elit, volutpat aliquam urna. Vestibulum semper erat vel dui dictum vehicula;</li>
                        </ul>
                    </h2>

                    {/* Começo Privilegios */}
                    <h2 className="privilegios">
                        Privilegios
                    </h2>
                    <h2 className="privilegios-description">
                        <ul>
                            <li>Lorem ipsum dolor sit amet;</li>
                            <li>Consectetur adipiscing elit;</li>
                            <li>Nulla convallis ex at leo feugiat pretium;</li>
                            <li>Nullam eu dapibus elit, volutpat aliquam urna. Vestibulum semper erat vel dui dictum vehicula;</li>
                        </ul>
                    </h2>

                    {/* Começo Botão */}
                    <a href="" class="botao-candidatar-teste">
                        Me candidatar
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DescricaoVaga;
