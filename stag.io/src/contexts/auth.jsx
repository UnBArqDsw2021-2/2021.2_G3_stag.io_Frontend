import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const recoveredUser = localStorage.getItem("user");

      if(recoveredUser){
        setUser(JSON.parse(recoveredUser));
      }

      setLoading(false);
    }, []);
  
    const login = (value) => {
      console.log("login auth", value);

      const loggedUser = {
        id: "123",
        cpf: value.cpf,
      };

      localStorage.setItem("user", JSON.stringify(loggedUser));

      if(value.password === "secret"){ //Senha para verificar a validação de login
        console.log("Vc descobriu a senha secreta!");
        setUser(loggedUser);
        navigate("/cadastroCandidato"); //Mudar a página de destino quando for unir o Front-end
      }
    };
    const logout = () => {
      console.log("logout");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    };

    return(
        <AuthContext.Provider value={{authenticated: Boolean(user), user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}