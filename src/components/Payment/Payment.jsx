import Link from "react-router-dom";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import { useLocation } from "react-router-dom";

function Payment({ cartItems, onAdd, onRemove, onReset }) {
  //  const location = useLocation()
  //   // console.log(location.state);
  //   const cartPayment = location.state;
  //   console.log(cartPayment)

  return (
    <>
      <h1 className="text-center">Payment</h1>
      {cartItems.map((item) => {
        const { id, title, price, img, qty } = item;
        return (
          <>
            <section key="id" className="d-flex container border my-5 py-3 ">
              <p>{img}</p>
              <div className="d-flex ">
                <p>{qty}</p>
                <button onClick="" className="btn btn-primary m-2">+</button>
                <button className="btn btn-primary m-2">-</button>
                <button className="btn btn-primary m-2">delete</button>
              </div>
              
              <p>{title}</p>
              <p>{price} €</p>
              <h4>Total: {qty * price} €</h4>
              {/* <button clasName="btn btn-primary">Payment</button> */}
            </section>
            {/* <button>Payment</button> */}
          </>
        );

        // <ShoppingCard
        //   key={item.id}
        //   cartPayment={cartPayment}
        //   item={item}
        // />
      })}
      <div className="text-center">
        <button className="btn btn-primary w-25 py-2">Payment</button>
      </div>
    </>
  );
}

export default Payment;
