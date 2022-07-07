// import React from "react";

import "./productCard.css";
import "../Products/products.css";

function ProductCard({ product, cart, setCart, count, setCount }) {

  const counterAdd = () => {
    return setCount(count + 1);    
  };

  const handleAddToCart = () =>{
    setCart([...cart,{id:product.id, title:product.title, price:product.price, image: product.img}])    
  }



  // console.log(cart)
  return (
    <>
      <div className="card">
        <img src={product.img} alt={product.img} className="product__img" />
        <div>{product.title}</div>
        <div>{product.price} €</div>
        <button
          type="button"
          className="btn btn-secondary btn-sm counter-button"
          onClick={handleAddToCart} 
        >
          Add
        </button>
      </div>
    </>
  );
}

export default ProductCard;
