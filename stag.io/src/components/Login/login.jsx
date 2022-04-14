import './login.css';
import React from 'react';
import Lock from './assets/lock.png';
import {AuthContext} from "../../contexts/auth"
import { useContext, useState } from 'react';
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function Popup(props){
    const {authenticated, login} = useContext(AuthContext);

    const [ values, setValues ] = useState({
      cpf: '',
      password: '',
    })

    async function handleSubmit(){

    const schema = Yup.object({
        cpf: Yup.string().required("CPF é obrigatório!"),
        password: Yup.string().required("Senha é obrigatório!"),
    });

    try{
        await schema.validate(values);
        toast.success("Usuário Logado!");
        login(values);
        window.location.pathname = '/'
    }  
    catch(error){
        if( error instanceof Yup.ValidationError){
            toast.error(error.message);
        }
    }
    }

    const handleChange = (e) => {
    e.preventDefault();
    setValues({...values, [e.target.name]: e.target.value});
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
                             <input className="form-control" type="text" name="cpf" placeholder="CNPJ/CPF" value={values.cpf} onChange={handleChange}/>
                        </div>
                         <div className="mb-3">
                             <input className="form-control" type="password" name="password" placeholder="Senha" value={values.password} onChange={handleChange}/>
                        </div>
                         <div className="mb-3">
                             <button className="btn btn-secondary d-block w-100 buttonColor" type="button" onClick={handleSubmit}>Log In</button>
                         </div>
                         <a className="forgot linkOptions" href="#">Forgot your email or password?</a>
                         <br></br>
                         <a className="forgot linkOptions" href="cadastroCandidato">Criar conta Estagiário</a>
                         <br></br>
                         <a className="forgot linkOptions" href="cadastroEmpresa">Criar conta Empresa</a>
                         
                     </form>
                 </section>
            </div>
        <Toaster />
        </div>
    ):<></>;
}

export default Popup;