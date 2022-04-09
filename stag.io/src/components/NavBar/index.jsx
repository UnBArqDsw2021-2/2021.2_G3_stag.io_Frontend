import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo-white.svg";
import "./index.css";

const NavBar = () => {


    return(
        <nav className="NavBar">
            <div className="Logo">
                <Link to="/">
                    <img src={logo} />
                </Link>
                <ul className="LogoName">Stag.io</ul>
            </div>

            {/* <button onClick={()=>{console.log("saiu")}}>
                sair
            </button> */}
        </nav >
    );
}

export default NavBar;