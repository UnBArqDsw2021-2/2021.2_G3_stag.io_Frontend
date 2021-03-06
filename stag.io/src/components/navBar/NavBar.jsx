import React, { Component } from 'react';

import './NavBar.css';
import perfil from "./assets/icone-perfil.png";


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
                    <button className='button_Nav' onClick={() => {window.location.href = 'MinhasVagas';}}>Minhas vagas</button>
                    <button className='button_Nav' onClick={() => {window.location.href = 'Vagas';}}>Vagas</button>
                    <a className="navbar-brand" href="/detalhesCandidato">
                        <img className="img-fluid margin_img_logo" 
                        src={perfil} width = "50" alt="perfil"/>
                    </a>
            </nav>
            
        );
    }
}

export default Navbar;


