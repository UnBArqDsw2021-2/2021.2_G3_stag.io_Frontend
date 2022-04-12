import React, { Component } from "react";
import '../pages/Vagas/Vagas.css';
import Card from "./Card";

class Filtro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "coconut",
            countries: [
                { id: "1", country: "Cambodia" },
                { id: "2", country: "Australia" },
                { id: "3", country: "US" }
            ],
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

    getUnique(arr, comp) {
        const unique = arr
            //store the comparison values in array
            .map(e => e[comp])

            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the dead keys & store unique objects
            .filter(e => arr[e])

            .map(e => arr[e]);

        return unique;
    }

    componentDidMount() {
        const vagas = require("../data/vagas.json");
        this.setState({ vagas: vagas });
    }

    render() {
        const countries = require("../data/countries.json");
        const uniqueCountry = this.getUnique(countries.world, "country");

        const uniqueCouse = this.getUnique(this.state.vagas, "tag");

        const vagas = this.state.vagas;
        const vaga = this.state.vaga;

        const filterDropdown = vagas.filter(function (result) {
            return result.tag === vaga;
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
                                {uniqueCouse.map(vaga => (
                                    <option key={vaga.id} value={vaga.tag}>
                                        {vaga.tag}
                                    </option>
                                ))}
                            </select>
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