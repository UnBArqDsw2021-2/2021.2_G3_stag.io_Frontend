import React from "react";
import lapis from "../../images/lapis.svg";
import olho from "../../images/olho.svg";
import "./index.css";

const Vaga = () => {

    return(
        <div className="vaga">
            <div className="body">
                <div>teste</div>
                <div className="action">
                    <img src={lapis} />
                    <img src={olho} />
                </div>
            </div>
        </div>
    );
}

export default Vaga;