import React, { Component } from "react";
import '../../pages/Vagas/Vagas.css';
import Card from "../Card/Card";


import Slider from 'rc-slider';
import TooltipSlider, { handleRender } from './TooltipSlider';
import 'rc-slider/assets/index.css';
import './Filtro.less';


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
        const vagas = require("../../data/vagas.json");
        this.setState({ vagas: vagas });
    }

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

    render() {

        const uniqueCurso = this.getUnique(this.state.vagas, "curso");

        const vagas = this.state.vagas;
        const vaga = this.state.vaga;

        const sliderStyle = {
            border: "solid 2px #000",
            backgroundColor: "white"
        };

        const filterDropdown = vagas.filter(function (result) {
            return result.escolaridade === vaga || result.regime === vaga || result.curso === vaga;
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
                                style={{ width: 205, borderRadius: 10 }}
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
                        <a style={{ letterSpacing: -7 }}>----------------------------------------------------------------------------------------------------------</a>
                        <br />



                        <label value={this.state.vaga} onChange={this.handleChangeVaga} >
                            <input type="radio" name="regime" value="Presencial" />
                            <a> Presencial</a>
                            <br />
                            <input type="radio" name="regime" value="Remoto" />
                            <a> Remoto</a>
                            <br />
                        </label>

                        <br />
                        <a style={{ letterSpacing: -7 }}>----------------------------------------------------------------------------------------------------------</a>
                        <br />

                        <label style={{ width: 190, paddingBottom: 10 }}>
                            Valor da bolsa
                            <Slider
                                // value={this.state.vaga}
                                // onChange={this.handleChangeVaga}
                                railStyle={{
                                    border: "solid 2px #000",
                                    backgroundColor: "white",
                                    height: 16,
                                    width: 205
                                }}
                                min={0}
                                max={1200}
                                defaultValue={1000}
                                handleRender={handleRender}
                                handleStyle={{
                                    borderColor: 'black',
                                    height: 15,
                                    width: 15,
                                    marginLeft: -14,
                                    marginTop: 1,
                                    marginLeft: 6,
                                    backgroundColor: 'black',
                                }}
                                trackStyle={{ backgroundColor: "transparent" }} />
                        </label>

                        <br />
                        <a style={{ letterSpacing: -7 }}>----------------------------------------------------------------------------------------------------------</a>
                        <br />

                        <label>
                            Curso <br />
                            <select
                                style={{ width: 205, borderRadius: 10 }}
                                value={this.state.vaga}
                                onChange={this.handleChangeVaga}
                            >
                                {uniqueCurso.map(vaga => (
                                    <option key={vaga.id} value={vaga.curso}>
                                        {vaga.curso}
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