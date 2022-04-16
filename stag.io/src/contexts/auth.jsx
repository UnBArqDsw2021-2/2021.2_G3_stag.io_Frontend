import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api, config } from "../service/api";

export const AuthContext = createContext();

const qs = require("qs");

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const signIn = async (value) => {
    try {
      console.log(value);
      const { data } = await api.post(`/cadastro`, qs.stringify(value), config);
      console.log(data);

      if (data == "Empresa cadastrada" || data == "Cadastra candidato") {
        console.log("Sucesso!");
      } else {
        throw new Error("Erro ao cadastrar usuário");
      }
    } catch (error) {
      console.log("Erro");
    }
  };

  const login = (value) => {
    console.log("login auth", value);

    const loggedUser = {
      id: "123",
      cpf: value.cpf,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (value.password === "secret") {
      //Senha para verificar a validação de login
      console.log("Vc descobriu a senha secreta!");
      setUser(loggedUser);
      navigate("/Vagas");
    }
  };
  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: Boolean(user),
        user,
        loading,
        login,
        logout,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
