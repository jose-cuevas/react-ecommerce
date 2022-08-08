import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";

import ProductCard from "../ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";

// import "./products.css";
import WishList from "../WishList/WishList.jsx";

function Products({ products, onAdd, addWishList, showAlert }) {
  return (
    <>
      <section className="col-md-8">
        <div className="row">
          
            {products.map((product) => (
              <div className="col-md-4 col-lg-3">
              <ProductCard
                key={product.id}
                product={product}
                onAdd={onAdd}
                addWishList={addWishList}
              />
              </div>
            ))}
          
        </div>
      </section>
    </>
  );
}

export default Products;
