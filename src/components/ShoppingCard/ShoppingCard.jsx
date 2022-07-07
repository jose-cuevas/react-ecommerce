import CounterApp from "../CounterApp/CounterApp";

function ShoppingCard({ itemBuyed, cart, setCart, count, setCount }) {
//   const counterAdd = () => {
//     return setCount(count + 1);
//   };

//   const counterRest = () => {
//     return setCount(count - 1);
//   };

//   const counterReset = () => {
//     return setCount(0);
//   };

  return (
    <>
      <div>{itemBuyed.title}</div>
      <div>{itemBuyed.price} €</div>
      <CounterApp/>      

    </>
  );
}

export default ShoppingCard;
