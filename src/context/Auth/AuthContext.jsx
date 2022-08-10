import { createContext } from "react";
import { useReducer } from "react";
import { authReducer } from "./authReducer";

import uniqid from "uniqid";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const init = () => JSON.parse(localStorage.getItem("user")) || {};

  const LogInAuth = (name) => {
    const user = {
      id: uniqid(),
      userName: name,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "USER_LOGIN", payload: user });
  };

  const LogOutAuth = () => {
    localStorage.removeItem('user');    
    dispatch({ type: "USER_LOGOUT" });    
  };

  const initialState = {};

  const [authState, dispatch] = useReducer(authReducer, initialState, init);


  return (
    <>
      <AuthContext.Provider value={{ authState, LogInAuth, LogOutAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
