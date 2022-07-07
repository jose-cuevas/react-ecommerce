import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
// import products from "../../data/products";
import CounterApp from "../CounterApp/CounterApp.jsx";

import "./products.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import '../ProductCard/productCard.css'

function Products({ products, count, setCount, cart, setCart }) {
  // const counterAdd = () => {
  //   return setCount(count + 1);    
  // };

 console.log(cart)
 
  return (
    <>
      <section className="products-container">
        <h1>Shop</h1>
        {/* {console.log(products)} */}
        <section className="products-container__grid">
          {products.map((product) => (
            
            <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} count={count} setCount={setCount} />            
          ))}
        </section>
      </section>
    </>
  );
}

export default Products;
