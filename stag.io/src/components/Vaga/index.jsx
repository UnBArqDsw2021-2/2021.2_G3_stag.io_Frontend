import React from "react";
import lapis from "../../images/lapis.svg";
import olho from "../../images/olho.svg";
import "./index.css";

const Vaga = (props) => {
  const { info } = props;

  return (
    <div className="vaga">
      <div className="body">
        <div>{info.tituloVaga}</div>
        <div className="action">
          <img src={lapis} />
          <img src={olho} />
        </div>
      </div>
    </div>
  );
};

export default Vaga;
