import { useContext } from 'react'
import { AuthContext } from './context/Auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const { authState } = useContext(AuthContext)
    console.log(authState)
    console.log(authState.userName)


    
    const navigate = useNavigate()

    return (authState.isLogged) ? children : <Navigate to="/login"/>

    // if (!isLogged){
    //     // return navigate('/')
    //     return <Navigate to='/' />;
    // }
    // else {return children}


//   return (
//     <>
//     <div>PrivateRoute</div>
//     </>
//   )
}

export default PrivateRoute