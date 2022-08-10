import { Link } from "react-router-dom";
import products from "../../data/products";
import {
  BsPlusLg,
  BsDashLg,
  BsFillCartFill,
  BsFillHeartFill,
  BsInfoCircleFill,
} from "react-icons/bs";

import "./productCard.css";
import "../Products/products.css";

function ProductCard({ product, onAdd, addWishList }) {
  return (
    <>
      <article className="card m-2 ">
        <img src={product.img} alt={product.img} className="img-thumbnail" />
        <div className="ps-3 mt-2">{product.title}</div>
        <div className="ps-3 mb-2">{product.price} €</div>
        <section className="d-flex justify-content-center">
          <Link to={`/products/${product.id}`}>
            <button className="btn  btn-sm counter-button mb-1 ">
              <BsInfoCircleFill
                style={{ fontSize: "1.2rem", color: "#6c757d" }}
              />
            </button>
          </Link>
          <button
            type="button"
            className="btn  btn-sm counter-button mb-1"
            onClick={() => onAdd(product)}
          >
            <BsFillCartFill style={{ fontSize: "1.2rem", color: "#6c757d" }} />
          </button>
          <button
            type="button"
            className="btn  btn-sm"
            onClick={() => addWishList(product)}
          >
            <BsFillHeartFill style={{ fontSize: "1.1rem", color: "#6c757d" }} />
          </button>
        </section>
      </article>
    </>
  );
}

export default ProductCard;
