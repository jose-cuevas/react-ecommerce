import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ShoppingContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";

import swal from "sweetalert";
import "./login.css";

import { AuthContext } from "../../context/Auth/AuthContext";

function Login({ products, onAdd, onRemove, onReset, isLoggedIn, setIsLoggedIn,setUserRegister }) {

  const {cartItems, setCartItems} = useContext(ShoppingContext)
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

const {authState, LogInAuth} = useContext(AuthContext)
  

  // Fetching users from API json-server
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:7000/users");
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();   

    if (userName && email) {      
      users.map((user) => {
        if (user.userName === userName && user.email === email) {
          setUserName(userName)            
          LogInAuth(userName)
          return navigate("/payment", { state: cartItems, onAdd, onRemove }, {userName: {userName}});
        } else {
          swal("This user doesn´t exist");
        }
      });
    } else {
      swal("Please insert correct data");
    }
  };

  return (
    <>
      <section className="container my-5">
        <div className="text-center">
          <h1>Login</h1>
          <p className="lead">Please, insert your user data</p>
        </div>

        <div className="row justify-content-center my-3" >
          <div className="col-6">
            <form className="form" onSubmit={handleSubmit}>
              <div className="my-3">
                <label className="form-label" htmlFor="userName">
                  User:
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="e.g. mark"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. mark@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-center my-3">
                <button type="submit" className="btn btn-primary mb-2">
                  Login
                </button>
                <div className="form-text">
                  Are you a new user? Please,{" "}
                  <Link to="/sigin">register here</Link>
                </div>

                <div className="form-text">
                  <p>
                    Forgot your password?, Please,{" "}
                    <Link to="/forgot">click here</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
