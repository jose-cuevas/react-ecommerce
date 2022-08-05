import { AuthContext } from "./AuthContext"
export const authReducer = (state, action) => {

if (action.type === 'USER_LOGIN'){
    // return new state {}
    // localStorage.setItem("userLogin", JSON.stringify(state));
    return {...state, id: action.payload.id, userName: action.payload.userName, isLogged: true}
}
if (action.type === 'USER_LOGOUT'){
    // return new state {}
    return {...state, isLogged: false}
}



}