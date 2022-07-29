import { Link } from "react-router-dom";
import {BsFillCartFill, BsFillHeartFill} from "react-icons/bs"

function Navbar({ cartItems, state}) {
  
  const totalCartItems = cartItems.reduce((acc, item)=>{
    const {qty} = item
    return acc += qty
  },0)

  // TODO: Get wishlist by props or from localStorage (useEffect)
  const totalWishItems = state.reduce((acc, item)=>{
    const {qty} = item
    return acc += qty
  },0)
  

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid my-3 ">
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
              <a class="nav-link" href="/wishlist">
                <BsFillHeartFill style={{ fontSize: "1.3rem" }}/>
                <span> </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                {/* <span>Cart </span> */}
                <BsFillCartFill style={{ fontSize: "1.5rem" }}/>
                <span>{totalCartItems}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
