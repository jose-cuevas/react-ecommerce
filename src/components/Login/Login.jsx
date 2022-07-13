import { Link } from "react-router-dom";

import "./login.css";

function Login() {
  return (
    <>
    <Link to="/"><p>Back Home</p></Link>
      <section className="container-sm container-form">
        
        <h2>Login</h2>
        <form className="">
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Username
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" required />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary container-fluid">
            Sign in
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
