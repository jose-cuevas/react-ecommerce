import { Link } from "react-router-dom";

import "./wishlist.css";
import { BsCart, BsTrash } from "react-icons/bs";

function WishList({ state, onAdd, removeWishList }) {
  const whishList = state;
  return (
    <>
      {/* <Link to="/">Back to home</Link> */}
      {/* <h1>WishList</h1> */}
      {whishList.map((wish) => {
        return (
          <div key={wish.id} className="container my-5 ">
            <div className="row mb-5 align-items-center mx-auto border p-4">
              <div className="col-sm-2">
                <img
                  className="wish-container__img"
                  src={wish.img}
                  alt={wish.title}
                ></img>
              </div>
              <div className="col-sm-7 ">
                <p className="mx-3 my-0">
                  Product: {wish.title}
                </p>
                <p className="mx-3 my-0">
                  Price: {wish.price} €
                </p>
              </div>
              <div className="col-sm-3 d-flex">
                <button
                  className="btn btn-sm mx-2 mb-2"
                  onClick={() => onAdd(wish)}
                >
                  <BsCart style={{ fontSize: "1.5rem" }} />{" "}
                </button>
                <button
                  className="btn btn-sm mx-2 mb-2"
                  onClick={() => removeWishList(wish)}
                >
                  <BsTrash style={{ fontSize: "1.5rem" }} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WishList;
