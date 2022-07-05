import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import products from "../../data/products";
import CounterApp from "../CounterApp/CounterApp.jsx";

import "./products.css";
// import '../ProductCard/productCard.css'

function Products() {
  return (
    <>
      <section className="products-container">
        <h1>Shop</h1>
        {/* {console.log(products)} */}

        <section className="products-container__grid">
          {products.map((product) => (
            // {console.log(product.title)}

            <ProductCard key={product.id}>
              <img
                src={product.img}
                alt={product.img}
                className="product__img"
              />
              <div>{product.title}</div>
              <div>{product.price} €</div>
              <CounterApp />
            </ProductCard>
          ))}
        </section>
      </section>
    </>
  );
}

export default Products;
