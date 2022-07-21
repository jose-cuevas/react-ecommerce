import { Link } from "react-router-dom";
import { useEffect } from "react";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import { useLocation } from "react-router-dom";
import { BsPlusLg, BsDashLg, BsTrash } from "react-icons/bs";

import "./payment.css";

function Payment({ cartItems, onAdd, onRemove, onReset }) {
  //  const location = useLocation()
  //   // console.log(location.state);
  //   const cartPayment = location.state;
  //   console.log(cartPayment)

  // useEffect(()=>{
  //   const myArr = JSON.parse(localStorage.getItem('cartItems'))
  //   console.log(myArr)
  // }, [cartItems])

  // console.log(cartItems);

  return (
    <>
      <Link to="/">
        <p>Back to Home Page</p>
      </Link>
      <h1 className="text-center">Payment</h1>

      {cartItems.map((item) => {
        const { id, title, price, img, qty } = item;
        
        return (
          <>
            <section key={id} className="container border mb-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    src={img}
                    alt={title}
                    className="payment-container__img"
                  />
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
          </>
        );
      })}

      {/* Pending task: total price */}
      {/* <section className="container">
        <div className="row">
          <div className="col-3">
            {cartItems.reduce((total, item) => {              
              return (
                <>
                  {console.log(total)}
                  {total += (item.price * item.qty)}
                  <h2>{total}</h2>
                </>
              );
            }, 0)}
          </div>
        </div>
      </section> */}

      <div className="text-center">
        <button className="btn btn-primary px-4">Payment</button>
      </div>
    </>
    
  );
}

export default Payment;
