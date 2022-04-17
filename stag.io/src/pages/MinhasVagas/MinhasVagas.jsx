import React from "react";
import "./MinhasVagas.css";
import Navbar from "../../components/navBar/NavBar";
import Card from "../../components/Card/Card";

function MinhasVagas() {
  return (
    <div className="MinhasVagas">
      <Navbar></Navbar>
      {/* Container que aloca a página */}
      <h1 className="subTitle_minhas_vagas">Minhas Vagas</h1>

      <div className="content-column1_minhas_vagas">
        {/* <Card {...item}></Card> */}
      </div>
    </div>
  );
}

export default MinhasVagas;
