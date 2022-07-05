import React from "react";
import CounterApp from '../CounterApp/CounterApp.jsx'
import './shoppingCart.css'


function ShoppingCart() {
  return (
    <>
      <section className="shoppingCart-container">
      <h2>Shopping Cart</h2>
      <CounterApp/>
      </section>
    </>
  );
}

export default ShoppingCart;
