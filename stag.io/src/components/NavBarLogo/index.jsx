import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo-white.svg";
import { Button, Navbar } from 'react-bootstrap';
import "./index.css";

const NavBarLogo = () => {


    return(
        <Navbar className="NavBar">
            <div className="Logo">
                <Link to="/">
                    <img src={logo} />
                </Link>
                <ul className="LogoName">Stag.io</ul>
            </div>
        </Navbar >
    );
}

export default NavBarLogo;