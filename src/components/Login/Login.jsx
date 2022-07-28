import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import swal from "sweetalert";
import "./login.css";

function Login({ products, cartItems, onAdd, onRemove, onReset }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

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
    // console.log(userName, email)

    if (userName && email) {
      console.log(users);
      users.map((user) => {
        if (user.userName === userName && user.email === email) {
          console.log(cartItems);
          return navigate("/payment", { state: cartItems, onAdd, onRemove });
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
      {/* <Link to="/">
        <p>Back Home</p>
      </Link> */}
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
