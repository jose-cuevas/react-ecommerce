import { useReducer } from "react";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

export default function AuthProvider({ children }) {
  const LogInAuth = (name) => {
    localStorage.setItem("userName", name);
    dispatch({ type: "USER_LOGIN", payload: name });
  };

  const LogOutAuth = () => {    
    localStorage.removeItem("userName");
    dispatch({ type: "USER_LOGOUT" });
  };

  const init = localStorage.gettItem("userName") || {};
  const initialState = {};

  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  return (
    <>
      <AuthContext.Provider value={{authState, LogInAuth, LogOutAuth}}>{children}
      </AuthContext.Provider>
    </>
  );
}
