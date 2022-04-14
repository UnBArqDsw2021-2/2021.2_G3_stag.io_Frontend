import React, { Component } from 'react';

import './NavBar.css';
import logo from "../../logo/logo-white.png";


class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <a className='logo' href='/'>
                    <img src={logo} alt="Logo"></img>
                    <h1>Stag.io</h1>
                </a>
                <button>Minhas vagas</button>
                <button>Vagas</button>
            </div>
        );
    }
}

export default Navbar;


