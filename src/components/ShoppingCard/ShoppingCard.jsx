// import CounterApp from "../CounterApp/CounterApp.jsx";

import "./ShoppingCard.css"
function ShoppingCard({ item, cartItems, onAdd, onRemove, onReset}) {
// const counterAdd = () => {
//   return setCount(count + 1);
// };

// console.log(item)


  return (
    <>
    
    {/* <div class="item-container"> */}
      <img src={item.img} alt="" className="img-thumbnail"/>
      <div>{item.title}</div>
      <div>{item.price * item.qty} €</div>
      <div>{item.qty}</div>
      {/* <CounterApp key={item.id} setCount={setCount} count={count} counterAdd={counterAdd} />    */}
    {/* </div> */}
      <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={() => onAdd(item)}>+</button>
      <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={() => onRemove(item)}>-</button>
      <button type="button" className="btn btn-secondary btn-sm counter-button" onClick={() => onReset(item)}>Reset</button>
     
      

      
      {/* {console.log(count)}   
      <div>TOTAL: {itemBuyed.price}</div> */}
    </>
  );
}

export default ShoppingCard;
