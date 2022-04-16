import "./cadastroCandidato.css";
import Usuario from "./assets/cadastro_usuario.png";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/auth";
import Navbar from "../../components/navBar/NavBar";

function CadastroCandidato() {
  const { signIn } = useContext(AuthContext);

  const [values, setValues] = useState({
    nome: "",
    cpf: "",
    description: "",
    password: "",
    local: "",
    idEscolaridade: "",
    curriculo: "",
    areaInteresse: "",
  });

  async function handleSubmit() {
    const schema = Yup.object({
      nome: Yup.string().required("Nome é obrigatório!"),
      cpf: Yup.string().required("CPF é obrigatório!"),
      description: Yup.string().required("Descrição é obrigatório!"),
      password: Yup.string().required("senha é obrigatório!"),
      cidade: Yup.string().required("Cidade é obrigatória!"),
      uf: Yup.string().required("UF é obrigatória!"),
      instituicao: Yup.string().required("Instituição é obrigatória!"),
      nomeCurso: Yup.string().required("Curso é obrigatória!"),
      idEscolaridade: Yup.string().required("Escolaridade é obrigatória!"),
      curriculo: Yup.string().required("Currículo é obrigatório!"),
      areaInteresse: Yup.string().required("Áreas de interesse é obrigatório!"),
    });

    try {
      await schema.validate(values);
      await signIn({
        tipoUsuario: "candidato",
        nome: values.nome,
        cpf: values.cpf,
        senha: values.password,
        cidade: values.cidade,
        uf: values.uf,
        idEscolaridade: parseFloat(values.idEscolaridade),
        nomeCurso: values.nomeCurso,
        nomeInstituicao: values.instituicao,
        curriculo: values.curriculo,
        areasInteresse: values.areaInteresse,
        descricaoCandidato: values.description,
      });

      toast.success("Candidato cadastrado com sucesso!");
      window.location.pathname = "/";
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        toast.error(error.message);
      } else {
        toast.error("Erro ao cadastrar candidato!");
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
      <Navbar />

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
              placeholder="Cidade"
              name="cidade"
              value={values.cidade}
              onChange={handleChange}
            ></input>
            <input
              className="text-box-type-1-user"
              id="text5"
              placeholder="UF"
              name="uf"
              value={values.uf}
              onChange={handleChange}
            ></input>
            <input
              className="text-box-type-1-user"
              id="nomeCurso"
              placeholder="Curso"
              name="nomeCurso"
              value={values.nomeCurso}
              onChange={handleChange}
            ></input>
            <input
              className="text-box-type-1-user"
              id="text5"
              placeholder="Instituição"
              name="instituicao"
              value={values.instituicao}
              onChange={handleChange}
            ></input>
            <select
              className="text-box-type-1-user"
              id="idEscolaridade"
              name="idEscolaridade"
              value={values.idEscolaridade}
              onChange={handleChange}
            >
              <option value={1}>Ensino Superior</option>
              <option value={2}>Ensino Médio</option>
              <option value={3}>Ensino Fundamental</option>
            </select>
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
