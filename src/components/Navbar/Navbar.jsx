import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

import "./navbar.css";

function Navbar({ cartItems, state, showAlert, isLoggedIn }) {
  const totalCartItems = cartItems.reduce((acc, item) => {
    const { qty } = item;
    return (acc += qty);
  }, 0);

  // TODO: Get wishlist by props or from localStorage (useEffect)
  // const totalWishItems = state.reduce((acc, item)=>{
  //   const {qty} = item
  //   return acc += qty
  // },0)

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/wishlist" className="nav-link"><BsFillHeartFill style={{ fontSize: "1.3rem" }} />
                <span> </span></Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link"><BsFillCartFill style={{ fontSize: "1.5rem" }} />
                <span>{totalCartItems}</span></Link>
        </li>

{/* 
        {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    logOut
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    LogIn
                  </a>
                </li>
              </>
            )} */}


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
