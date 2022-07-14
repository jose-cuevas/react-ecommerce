import Link from "react-router-dom"
import ShoppingCard from "../ShoppingCard/ShoppingCard";

function Payment({ cartItems }) {
  console.log(cartItems);
  return (
    <>    
      <h1>Payment</h1>
      {/* {cartItems.map((item) => (
        <ShoppingCard
          key={item.id}
          cartItems={cartItems}
          item={item}
          onAdd={onAdd}
          onRemove={onRemove}
          onReset={onReset}
        />
      ))} */}
    </>
  );
}

export default Payment;
