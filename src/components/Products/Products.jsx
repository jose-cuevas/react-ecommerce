import {useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar.jsx";

import ProductCard from "../ProductCard/ProductCard.jsx";
import {Link} from "react-router-dom"

// import "./products.css";
import WishList from "../WishList/WishList.jsx";


function Products({ products, onAdd, addWishList }) {
  
  return (
    <>
    {/* <Navbar/> */}
      <section className="products-container">        
        <h1>Shop</h1>        
        <section className="products-container__grid">
          {products.map((product) => (            
            <ProductCard key={product.id} product={product} onAdd={onAdd} addWishList={addWishList} />            
          ))}
        </section>
      </section>
    </>
  );
}

export default Products;
