import { Link } from "react-router-dom";

import "./wishlist.css";
import { BsFillTrashFill } from "react-icons/bs";

function WishList({ state, onAdd, removeWishList }) {
  const whishList = state;
  return (
    <>
      <Link to="/">Back to home</Link>
      {/* <h1>WishList</h1> */}
      {whishList.map((wish) => {
        return (
          <div key={wish.id} className="container">
            <div className="row mb-5 align-items-center mx-auto">
              <div className="col-md-2">
                <img
                  className="wish-container__img"
                  src={wish.img}
                  alt={wish.title}
                ></img>
              </div>
              <div className="col-md-7">
                <p>Product: {wish.title} {wish.price} €</p>
                <p></p>
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-primary btn-sm mx-2 mb-2"
                  onClick={() => onAdd(wish)}
                >
                  Add to basket
                </button>
                <button
                  className="btn btn-sm mx-2 mb-2"
                  onClick={() => removeWishList(wish)}
                >
                  <BsFillTrashFill/>
                </button>
              </div>
            </div>

            {/* 
            <img
              className="wish-container__img"
              src={wish.img}
              alt={wish.title}
            ></img>
            <div>{wish.title}</div>
            <div>{wish.price}</div>
            <button
              className="btn btn-primary btn-sm mx-2 mb-2"
              onClick={() => onAdd(wish)}
            >
              Add to basket
            </button>
            <button
              className="btn btn-primary btn-sm mx-2 mb-2"
              onClick={() => removeWishList(wish)}
            >
              Remove
            </button> */}
          </div>
        );
      })}
    </>
  );
}

export default WishList;
