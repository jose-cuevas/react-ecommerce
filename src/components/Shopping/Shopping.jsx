import React from "react";
import ShoppingCard from "../ShoppingCard/ShoppingCard.jsx"
import {Link} from "react-router-dom"

import { useContext } from "react";
import { CartContext } from "../../App.js";

// import './shopping.css'


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
  return (
    <>
      <section className="col-md-4 p-0">
      {cartItems.length === 0 && <h6 className="ps-3 mt-3">The cart is empty</h6>}
      {cartItems.map((item) => (
        <ShoppingCard key={item.id} item={item} onAdd={onAdd} onRemove={onRemove} onReset={onReset}/>  
      ))} 
      <div className="checkout-container mt-5">
        {cartItems.length > 0 && <h2 className="checkout-container__total-price text-end m-3">Total: {totalPrice()} €</h2>} 
        {cartItems.length > 0 && <Link to="/payment"><div className="btn btn-primary  container-fluid">Checkout</div></Link>}     
      </div>  
      </section>
    </>
  );
}

export default Shopping;
