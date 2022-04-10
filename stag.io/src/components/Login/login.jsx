import './login.css';
import React from 'react';
import Lock from './assets/lock.png'

function Popup(props){
    return(props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                {props.children }
                 <section className="login-dark">
                    <button className="close-btn " onClick={() => props.setTrigger(false)}>X</button>
                     <form method="post">
                         <img src={Lock} className="imagemLogin"/>
                         <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="CNPJ/CPF" /></div>
                         <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Senha" /></div>
                         <div className="mb-3"><button className="btn btn-secondary d-block w-100 buttonColor" type="submit">Log In</button>
                         </div><a className="forgot linkOptions" href="#">Forgot your email or password?</a>
                         <br></br>
                         <a className="forgot linkOptions" href="cadastroCandidato">Criar conta Estagiário</a>
                         <br></br>
                         <a className="forgot linkOptions" href="cadastroEmpresa">Criar conta Empresa</a>
                         
                     </form>
                 </section>
            </div>
        </div>
    ):"";
}

export default Popup;