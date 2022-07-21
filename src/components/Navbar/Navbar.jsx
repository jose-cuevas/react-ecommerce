import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid my-3">
          {/* <h2>Base nav</h2> */}
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                About us
              </a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
                {/* <Link to="/login">
                  <p>Login</p>
                </Link> */}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Shopping cart
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/wishlist">
                Whislist
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
