import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul class="nav justify-content-end">
          {/* <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link" href="#">
              About Us
            </a>
          </li> */}
          <li class="nav-item">
            {/* <a class="nav-link" href="#">
              Login
            </a> */}
            <Link to="login">Login</Link>
          </li>          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
