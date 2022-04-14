import React, { Component } from "react";
import '../pages/Vagas/Vagas.css';
import Card from "./Card";

class Filtro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vagas: [],
            vaga: ""
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleChangeVaga = event => {
        this.setState({ vaga: event.target.value });
    };

    componentDidMount() {
        const vagas = require("../data/vagas.json");
        this.setState({ vagas: vagas });
    }

    render() {


        const vagas = this.state.vagas;
        const vaga = this.state.vaga;

        const filterDropdown = vagas.filter(function (result) {
            return result.escolaridade === vaga || result.regime === vaga;
        });

        return (
            <div>
                <form onSubmit={this.handleSubmitVaga}>
                    <br />
                    <br />

                    <div className="content-column3">
                        <label>
                            Escolaridade <br />
                            <select
                                value={this.state.vaga}
                                onChange={this.handleChangeVaga}
                            >
                                <option key={vaga.id} value="Ensino Médio">
                                    Ensino Médio
                                </option>

                                <option key={vaga.id} value="Ensino Superior">
                                    Ensino Superior
                                </option>
                            </select>
                        </label>

                        <br />
                        <br />

                        <label value={this.state.vaga} onChange={this.handleChangeVaga} >
                            <input type="radio" name="regime" value="Presencial" />
                            Presencial
                            <br />
                            <input type="radio" name="regime" value="Remoto" />
                            Remoto
                            <br />
                        </label>

                    </div>

                    <div className="content-column1">
                        {filterDropdown.map(vaga => (
                            <div>
                                <Card tag={vaga.tags} title={vaga.vaga} company={vaga.empresa}></Card>
                            </div>
                        ))}
                    </div>

                </form>
            </div>
        );
    }
}

export default Filtro;