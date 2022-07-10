import React from "react";
import ShoppingCard from "../ShoppingCard/ShoppingCard.jsx"
// import CounterApp from '../CounterApp/CounterApp.jsx'

import products from "../../data/products";


import './shopping.css'


function Shopping( { cartItems, onAdd, onRemove, onReset}) {
  return (
    <>
      <section className="shoppingCart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>The cart is empty</p>}
      {cartItems.map((item) => (
        <ShoppingCard key={item.id} cartItems={cartItems} item={item} onAdd={onAdd} onRemove={onRemove} onReset={onReset}/>  
      ))}      
      </section>
    </>
  );
}

export default Shopping;
