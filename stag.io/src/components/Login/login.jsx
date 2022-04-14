import './login.css';
import React from 'react';
import Lock from './assets/lock.png';
import {AuthContext} from "../../contexts/auth"
import { useContext, useState } from 'react';

function Popup(props){
    const {authenticated, login} = useContext(AuthContext);

    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sumbit", {cpf, password});
        login(cpf, password);
      }

    return(props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                {props.children }
                 <section className="login-dark">
                    <button className="close-btn " onClick={() => props.setTrigger(false)}>X</button>
                     <form method="post">
                         <img src={Lock} className="imagemLogin"/>
                         <div className="mb-3">
                             <input className="form-control" type="text" name="email" placeholder="CNPJ/CPF" value={cpf}
                             onChange={ (e)=> setCpf(e.target.value)
                             }/></div>
                         <div className="mb-3">
                             <input className="form-control" type="password" name="password" placeholder="Senha" value={password}
                             onChange={ (e)=> setPassword(e.target.value)}
                             /></div>
                         <div className="mb-3">
                             <button className="btn btn-secondary d-block w-100 buttonColor" type="button"
                             onClick={handleSubmit}>Log In</button>
                         {/* <p>{String(authenticated)}</p> Variável para verificar a autenticação do usuário no login*/}
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