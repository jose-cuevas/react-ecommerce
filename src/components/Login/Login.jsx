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
          return navigate("/payment", { state: cartItems });
        } else {
          swal("This user doesn´t exist");
        }
      });
    } else {
      swal("Please insert correct data");
      return navigate("/");
    }
  };

  return (
    <>
      <Link to="/">
        <p>Back Home</p>
      </Link>
      <h2 className="text-center my-5">
          Login
        </h2>
      <section className="container sm">
        
        <section clasName="">
          <div className="col-6">
            <form className="form" onSubmit={handleSubmit}>
              <div className="p-3 ">
                <label className="form-label" htmlFor="userName">
                  User:
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="userName"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="p-3">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary ">
                Login
              </button>
              <div className="form-text">
                Are you a new user? Please,{" "}
                <Link to="/sigin">register here</Link>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

export default Login;
