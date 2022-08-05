import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

import { BsFillCartFill, BsFillHeartFill, BsFillPersonFill, BsBoxArrowRight } from "react-icons/bs";
import "./navbar.css";

function Navbar({ cartItems, state, showAlert, isLoggedIn }) {
  const { authState, LogOutAuth } = useContext(AuthContext);
  const { userName, isLogged } = authState;
  const navigate = useNavigate();

  const totalCartItems = cartItems.reduce((acc, item) => {
    const { qty } = item;
    return (acc += qty);
  }, 0);

  const totalWishItems = state.length;

  const logOut = () => {
    LogOutAuth()
    navigate("/login");

  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              <BsFillHeartFill style={{ fontSize: "1.3rem" }} />
              <span> {totalWishItems}</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <BsFillCartFill style={{ fontSize: "1.5rem" }} />
              <span>{totalCartItems}</span>
            </Link>
          </li>

          {isLogged ? (
            <li className="nav-item">              
              <div className="nav-link">
              <span className=""> Welcome {userName}&nbsp;&nbsp;</span>
              {/* <button className="" >
                LogOut
              </button>   */}
              <Link to="/login" onClick={logOut}>
                <BsBoxArrowRight style={{ fontSize: "1.5rem" }}></BsBoxArrowRight>
              </Link>
              </div>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
              <BsFillPersonFill style={{ fontSize: "1.5rem" }}></BsFillPersonFill>
              
              </Link>
            </li>
          )}       
          
        </ul>
      </nav>

      <section className="container alerts__container w-50">
        {showAlert && (
          <div
            className="alert alert-success alerts__container--message"
            role="alert"
          >
            Product added!
          </div>
        )}
      </section>
    </>
  );
}

export default Navbar;
