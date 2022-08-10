import { Link } from "react-router-dom";
import products from "../../data/products";
import { BsPlusLg, BsDashLg, BsTrash } from "react-icons/bs";


import "./productCard.css";
import "../Products/products.css";

function ProductCard({ product, onAdd, addWishList }) {
  return (
    <>   
      
        <article className="card m-2">
          <img src={product.img} alt={product.img} className="img-thumbnail" />
          <div>{product.title}</div>
          <div>{product.price} €</div>
          <Link to={`/products/${product.id}`}>
            <button className="btn btn-secondary btn-sm counter-button mb-1 container-fluid">
              More info
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-secondary btn-sm counter-button mb-1"
            onClick={() => onAdd(product)}
          >
            Add to basket
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => addWishList(product)}
          >
            Add to whishlist
          </button>
        </article>
       
       
    </>
  );
}

export default ProductCard;
