import React from "react";
import ShoppingCard from "../ShoppingCard/ShoppingCard.jsx"
// import CounterApp from '../CounterApp/CounterApp.jsx'

import products from "../../data/products";


import './shopping.css'


function Shopping( { products, count, setCount, cart, setCart}) {
  return (
    <>
      <section className="shoppingCart-container">
      <h2>Shopping Cart</h2>

      {cart.map((itemBuyed) => (
        // console.log(product)
        // <div>{product.title}</div>
        // <ShoppingCard key={product.id} product={product} cart={cart} setCart={setCart} />
        <ShoppingCard key={itemBuyed.id} itemBuyed={itemBuyed} cart={cart} setCart={setCart} count={count} setCount={setCount}/>  
      ))}
      
      </section>
    </>
  );
}

export default Shopping;
