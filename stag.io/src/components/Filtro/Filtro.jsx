import React, { Component } from "react";
import "../../pages/Vagas/Vagas.css";
import Card from "../Card/Card";

import Slider from "rc-slider";
import TooltipSlider, { handleRender } from "./TooltipSlider";
import "rc-slider/assets/index.css";
import "./Filtro.less";

import { api, config } from "../../service/api";

class Filtro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vagas: [],
      vaga: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleChangeVaga = (event) => {
    this.setState({ vaga: event.target.value });
  };

  componentDidMount() {
    api
      .get(`/getAllVagas`, config)
      .then((res) => {
        console.log(res.data);
        this.setState({ vagas: res.data });
      })
      .then((err) => {
        console.log(err);
      });
  }

  render() {
    const vagas = this.state.vagas;
    const vaga = this.state.vaga;

    const sliderStyle = {
      border: "solid 2px #000",
      backgroundColor: "white",
    };

    const filterDropdown = vagas.filter(function (result) {
      return (
        result.escolaridade === vaga ||
        result.regime === vaga ||
        result.curso === vaga
      );
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
            <a style={{ letterSpacing: -7 }}>
              ----------------------------------------------------------------------------------------------------------
            </a>
            <br />

            <label value={this.state.vaga} onChange={this.handleChangeVaga}>
              <input type="radio" name="regime" value="Presencial" />
              <a> Presencial</a>
              <br />
              <input type="radio" name="regime" value="Remoto" />
              <a> Remoto</a>
              <br />
            </label>

            <br />
            <a style={{ letterSpacing: -7 }}>
              ----------------------------------------------------------------------------------------------------------
            </a>
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
                  width: 205,
                }}
                min={0}
                max={1200}
                defaultValue={1000}
                handleRender={handleRender}
                handleStyle={{
                  borderColor: "black",
                  height: 15,
                  width: 15,
                  marginLeft: -14,
                  marginTop: 1,
                  marginLeft: 6,
                  backgroundColor: "black",
                }}
                trackStyle={{ backgroundColor: "transparent" }}
              />
            </label>
          </div>

          <div className="content-column1">
            {vagas.length === 0 ? (
              <div>
                <h1>Sem dados</h1>
              </div>
            ) : (
              vagas.map((item, index) => <Card {...item}></Card>)
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Filtro;
