import "./cadastroCandidato.css";
import Usuario from "./assets/cadastro_usuario.png";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/auth";

function CadastroCandidato() {
  const { signIn } = useContext(AuthContext);

  const [values, setValues] = useState({
    nome: "",
    cpf: "",
    description: "",
    password: "",
    local: "",
    escolaridade: "",
    curriculo: "",
    areaInteresse: "",
  });

  async function handleSubmit() {
    const schema = Yup.object({
      nome: Yup.string().required("Nome é obrigatório!"),
      cpf: Yup.string().required("CPF é obrigatório!"),
      description: Yup.string().required("Descrição é obrigatório!"),
      password: Yup.string().required("senha é obrigatório!"),
      local: Yup.string().required("Local é obrigatória!"),
      escolaridade: Yup.string().required("Escolaridade é obrigatória!"),
      curriculo: Yup.string().required("Currículo é obrigatório!"),
      areaInteresse: Yup.string().required("Áreas de interesse é obrigatório!"),
    });

    try {
      await schema.validate(values);
      signIn({
        tipoUsuario: "candidato",
        nome: values.nome,
        cpf: values.cpf,
        senha: values.password,
        cidade: values.local,
        uf: "DF",
        idEscolaridade: parseFloat(values.escolaridade),
        nomeCurso: "Engenharia de Software",
        nomeInstituicao: "Universidade de Brasilia",
        curriculo: values.curriculo,
        areasInteresse: values.areaInteresse,
        descricaoCandidato: values.description,
      });
      // window.location.pathname = "/";
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        toast.error(error.message);
      }
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="CadastroCandidato">
      {/* Barra de Navegação */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img
            className="img-fluid"
            src={`${process.env.PUBLIC_URL}/logo/logo-white.png`}
            width="50"
            alt="logo"
          />
        </a>
        <div className="collapse navbar-collapse">
          <ul>
            <h2 className="title">Stag.io</h2>
          </ul>
        </div>
        <div className="container-button-2">
          <button className="btn btn-primary vags_btn" type="button">
            Vagas
          </button>
        </div>
      </nav>

      <div className="container margin_container">
        <div className="row">
          <div className="col sub_title_user">
            <h4>Cadastro de Usuário</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-row">
          <div className="col-md-4">
            <input
              className="text-box-type-1-user"
              id="text1"
              placeholder="Nome"
              name="nome"
              value={values.nome}
              onChange={handleChange}
            ></input>
            <input
              className="text-box-type-1-user"
              id="text2"
              placeholder="CPF"
              name="cpf"
              value={values.cpf}
              onChange={handleChange}
            ></input>
            <input
              className="text-password-user"
              id="text3"
              placeholder="Senha"
              name="password"
              value={values.password}
              onChange={handleChange}
            ></input>
            <input
              className="text-box-type-2-user"
              id="text4"
              placeholder="Descrição"
              name="description"
              value={values.description}
              onChange={handleChange}
            ></input>
            <div className="container-button">
              <button
                className="btn btn-primary user_btn"
                type="button"
                onClick={handleSubmit}
              >
                Cadastrar
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <input
              className="text-box-type-1-user"
              id="text5"
              placeholder="Localização"
              name="local"
              value={values.local}
              onChange={handleChange}
            ></input>
            <input
              className="text-box-type-1-user"
              id="text6"
              placeholder="Escolaridade"
              name="escolaridade"
              value={values.escolaridade}
              onChange={handleChange}
            ></input>
            <input
              className="text-box-type-1-user"
              id="text7"
              placeholder="Currículo"
              name="curriculo"
              value={values.curriculo}
              onChange={handleChange}
            ></input>
            Áreas de interesse
            <input
              className="text-box-type-1-user"
              id="text8"
              placeholder="#python"
              name="areaInteresse"
              value={values.areaInteresse}
              onChange={handleChange}
            ></input>
          </div>
          <div className="col-md-4">
            <img src={Usuario} className="imagem_usuario" />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default CadastroCandidato;
