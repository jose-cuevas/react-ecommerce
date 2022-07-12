import {Link} from "react-router-dom";
import products from "../../data/products"

import "./productCard.css";
import "../Products/products.css";

function ProductCard({ product, onAdd}) {  
  return (
    <>
      <article className="card">
        <img src={product.img} alt={product.img} className="img-thumbnail" />
        <div>{product.title}</div>
        <div>{product.price} €</div>
        <Link to={`/products/${product.id}`}><button className="btn btn-secondary btn-sm counter-button mb-1 container-fluid">More info</button></Link>        
        <button
          type="button"
          className="btn btn-secondary btn-sm counter-button"
          onClick={() => onAdd(product)} 
        >
          Add to basket
        </button>
      </article>
    </>
  );
}

export default ProductCard;
