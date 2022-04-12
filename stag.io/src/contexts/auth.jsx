import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    const login = (cpf, password) => {
      console.log("login auth", {cpf, password});

      if(password === "secret"){ //Senha para verificar a validação de login
        console.log("Vc descobriu a senha secreta!");
        setUser({id:"123", cpf});
        navigate("/cadastroCandidato"); //Mudar a página de destino quando for unir o Front-end
      }
    };
    const logout = () => {
      console.log("logout");
      setUser(null);
    };

    return(
        <AuthContext.Provider value={{authenticated: Boolean(user), user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}