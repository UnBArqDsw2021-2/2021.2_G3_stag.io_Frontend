import React, { Component } from 'react';

import './NavBar.css';
import logo from "../../logo/logo-white.png";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                <img className="img-fluid" 
                src={`${process.env.PUBLIC_URL}/logo/logo-white.png`} width = "50" alt="logo"/>
                </a>
                <div className="collapse navbar-collapse">
                    <ul>
                    <h2 className="title">Stag.io</h2>
                    </ul>
                </div>
                    <button className='button_Nav'>Minhas vagas</button>
                    <button className='button_Nav'>Vagas</button>
            </nav>
            
        );
    }
}

export default Navbar;


