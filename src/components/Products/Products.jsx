import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import {Link} from "react-router-dom"

import "./products.css";


function Products({ products, onAdd }) {
  // const counterAdd = () => {
  //   return setCount(count + 1);    
  // };

//  console.log(cart)
 
  return (
    <>
      <section className="products-container">
        {/* <Link to="/login"><h1>Shop</h1></Link> */}
        <h1>Shop</h1>
        
        {/* {console.log(products)} */}
        <section className="products-container__grid">
          {products.map((product) => (
            
            <ProductCard key={product.id} product={product} onAdd={onAdd} />            
          ))}
        </section>
      </section>
    </>
  );
}

export default Products;
