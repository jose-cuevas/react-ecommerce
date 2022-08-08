import React from "react";
import ShoppingCard from "../ShoppingCard/ShoppingCard.jsx"
import {Link} from "react-router-dom"

import { useContext } from "react";
import { CartContext } from "../../App.js";

import './shopping.css'


function Shopping( { onAdd, onRemove, onReset, showAlert}) {

const {cartItems, setcartItems} = useContext(CartContext) 
  let totalCheckout = null;
  const totalPrice = () =>{
    cartItems.map(item=>{
      const itemTotal = item.price * item.qty
      totalCheckout += itemTotal
    })
  return totalCheckout
  }

  // console.log(cartItems)
  return (
    <>
      <section className="shoppingCart-container">
      {/* {showAlert && <div className="alert alert-success" role="alert">alkalkdklasd</div>} */}
      {cartItems.length === 0 && <p>The cart is empty</p>}
      {cartItems.map((item) => (
        <ShoppingCard key={item.id} item={item} onAdd={onAdd} onRemove={onRemove} onReset={onReset}/>  
      ))} 
      <div className="checkout-container">
        {cartItems.length > 0 && <h2 className="checkout-container__total-price">Total: {totalPrice()} €</h2>} 
        {cartItems.length > 0 && <Link to="/payment"><div className="btn btn-primary  container-fluid">Checkout</div></Link>}     
      </div>  
      </section>
    </>
  );
}

export default Shopping;
