import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import lapis from "../../images/lapis.svg";
import olho from "../../images/olho.svg";
import "./index.css";

const Vaga = (props) => {
  const { info } = props;
  const navigate = useNavigate();

  return (
    <div className="vaga">
      <div className="body">
        <div>{info.tituloVaga}</div>
        <div className="action">
          <button
            onClick={() => {
              navigate("/DescricaoVaga", { state: info });
            }}
          >
            <img src={olho} />
          </button>

          <button
            onClick={() => {
              navigate("/DescricaoVaga", { state: info });
            }}
          >
            <img src={lapis} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vaga;
