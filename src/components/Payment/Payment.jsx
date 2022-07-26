import { Link } from "react-router-dom";
import { useEffect } from "react";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import { useLocation } from "react-router-dom";
import { BsPlusLg, BsDashLg, BsTrash } from "react-icons/bs";

import "./payment.css";

function Payment({ cartItems, onAdd, onRemove, onReset }) {
  const totalBuyed = cartItems.reduce((total, item) => {
    const { price, qty } = item;
    const itemTotal = price * qty;
    total += itemTotal;
    return total;
  }, 0);

  const shippingFee = 6.78

  return (
    <>
      <h1 className="text-center mt-3">Payment</h1>
      <h1 className="text-center mb-5 lead">Please, proceed to pay</h1>

      {cartItems.map((item) => {
        const { id, title, price, img, qty } = item;

        return (
          <section className="container border mb-3 p-5">
            <div key={id} className="row align-items-center">
              <div className="col-md-2">
                <img src={img} alt={title} className="payment-container__img" />
              </div>
              <div className="col-md-3">Product: {item.title}</div>
              <div className="col-md-2">Price: {item.price}</div>
              <div className="col-md-1">Num: {item.qty}</div>
              <div className="col-md-3 d-flex p-2">
                <button
                  onClick={() => onAdd(item)}
                  className="btn payment-container__btn"
                >
                  <BsPlusLg style={{ fontColor: "white" }} />
                </button>
                <button onClick={() => onRemove(item)} className="btn ">
                  <BsDashLg />
                </button>
                <button onClick={() => onReset(item)} className="btn ">
                  <BsTrash style={{ fontSize: "1.5rem" }} />
                </button>
              </div>
              <div className="col-md-1">Total: {item.price * item.qty} </div>
            </div>
          </section>
        );
      })}

      {/* <div className="container d-flex justify-content-end my-5">
        <button className="btn btn-secondary me-4 ">Continue Shopping</button>
        <button className="btn btn-secondary">Clear Shopping Cart</button>
      </div> */}

      <div className="container border">
        <div className="row p-5">
          <p>Subtotal: {totalBuyed} €</p>
          <p className="border-bottom border-1 pb-4 mb-4">Shipping Fee: {shippingFee} €</p>
          <p>Order Total: {totalBuyed + shippingFee} €</p>
        </div>
      </div>

<div className="container d-flex justify-content-center">
<button className="btn btn-primary px-5 my-5">Payment</button>

</div>
      

      
    </>
  );
}

export default Payment;
