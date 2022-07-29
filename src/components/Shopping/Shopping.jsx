import React from "react";
import ShoppingCard from "../ShoppingCard/ShoppingCard.jsx"
import {Link} from "react-router-dom"
import { useContext } from "react";

import {CartItemsContext} from "../../context/ShoppingCartContext.jsx"

import './shopping.css'


function Shopping( { onAdd, onRemove, onReset}) {
  const {cartItems, setCartItems} = useContext(CartItemsContext)

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
    {/* <Link to="/wishlist">Whislist</Link> */}
      <section className="shoppingCart-container">
      <h3 className="mb-4">Shopping Cart</h3>
      {cartItems.length === 0 && <p>The cart is empty</p>}
      {cartItems.map((item) => (
        <ShoppingCard key={item.id} cartItems={cartItems} item={item} onAdd={onAdd} onRemove={onRemove} onReset={onReset}/>  
      ))} 
      <div className="checkout-container">
        {cartItems.length > 0 && <h2 className="checkout-container__total-price">Total: {totalPrice()} €</h2>} 
        {cartItems.length > 0 && <Link to="login"><div className="btn btn-primary  container-fluid">Checkout</div></Link>}     
      </div>  
      </section>
    </>
  );
}

export default Shopping;
