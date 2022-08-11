
import { BsPlusLg, BsDashLg, BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../App";
import { AuthContext } from "../../context/Auth/AuthContext";

import "./payment.css";

function Payment({ onAdd, onRemove, onReset }) {
  const { cartItems } = useContext(CartContext);
  const { authState } = useContext(AuthContext);
  const { userName } = authState;

  const totalBuyed = cartItems.reduce((total, item) => {
    const { price, qty } = item;
    const itemTotal = price * qty;
    total += itemTotal;
    return total;
  }, 0);

  const shippingFee = 6.78;

  return (
    <>
      <h1 className="text-center mt-3">Welcome {userName} !</h1>
      <h1 className="text-center mb-5 lead">Please, proceed to pay</h1>

      {cartItems.length === 0 && (
        <h2 className="lead text-center">Your shopping cart is empty</h2>
      )}      
      {cartItems.map((item) => {
        const { id, title, img } = item;
        return (
          <section key={id} className="container border mb-3 p-5">
            <div  className="row align-items-center">
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

{cartItems.length > 0 && (
  <>
      <div className="container border">
        <div className="row p-5">
          <h6>Subtotal: {totalBuyed} €</h6>
          <h6 className="border-bottom border-1 pb-4 mb-4">
            Shipping Fee: {shippingFee} €
          </h6>
          <h2 className="text-end">Total: {totalBuyed + shippingFee} €</h2>
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <button className="btn btn-primary px-5 my-5">Payment</button>
      </div>
      </>
    )}
  </>
  );
}

export default Payment;
