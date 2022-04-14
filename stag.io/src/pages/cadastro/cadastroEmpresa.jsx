import './cadastroCandidato.css';
import './cadastroEmpresa.css';
import Empresa from './assets/cadastro_empresa.png'
import React, {useState} from 'react';
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function CadastroEmpresa() {


  const [ values, setValues ] = useState({
    nome: '',
    cnpj: '',
    descricao: '',
    senha: '',
    localizacao: '',
    siteProp: '',
  })

  async function handleSubmit(){

    const schema = Yup.object({
        nome: Yup.string().required("Nome é obrigatório!"),
        cnpj: Yup.string().required("CNPJ é obrigatório!"),
        descricao: Yup.string().required("Descrição é obrigatório!"),
        senha: Yup.string().required("senha é obrigatório!"),
        localizacao: Yup.string().required("Localização é obrigatória!"),
        siteProp: Yup.string(),
    });


    try{
        await schema.validate(values);
        toast.success("Empresa cadastrada!");
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
  
  return (
    <div className="CadastroEmpresa">
      
       
      {/* Barra de Navegação */}
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
        </nav>

      <div className="container margin_container">
          <div className="row">
              <div className="col sub_title_user">
                <h4>Cadastro de Empresa</h4>
              </div>
          </div>
      </div>
      <div className="container-empresa">
          <div className="content-row">
              <div className="col-md-4">
                 <img src={Empresa} className="imagem_empresa"/>
              </div>
              <div className="col-md-4">
                  <input className="text-box-type-1-user" id="Nome" placeholder="Nome" name="nome" value={values.nome} onChange={handleChange}></input>
                  <input className="text-box-type-1-user" id="CNPJ" placeholder="CNPJ" name="cnpj" value={values.cnpj} onChange={handleChange}></input>
                  <input className="text-password-user" id="Senha" placeholder="Senha" name="senha" value={values.senha} onChange={handleChange}></input>
                  <input className="text-box-type-2-user" id="Descrição" placeholder="Descrição" name="descricao" value={values.descricao} onChange={handleChange}></input>
                  <div className="container-button">
                      <button className="btn btn-primary user_btn" type="button" onClick={handleSubmit}>Cadastrar </button>
                  </div>
              </div>
              <div className="col-md-4">
                  <input className="text-box-type-1-user" id="text1" placeholder="Localização" name="localizacao" value={values.localizacao} onChange={handleChange}></input>
                  <input className="text-box-type-1-user" id="text1" placeholder="Site próprio" name="siteProp" value={values.siteProp} onChange={handleChange}></input>
              </div>
          </div>
      </div>
      <Toaster />

    </div>
  );
}

export default CadastroEmpresa;
