// import CounterApp from "../CounterApp/CounterApp.jsx";

import "./ShoppingCard.css"
function ShoppingCard({ item, cartItems, onAdd, onRemove, onReset}) {

  return (
    <>
      <img src={item.img} alt="" className="img-thumbnail item__img"/>
      <div>{item.title}</div>
      <div>Price: {item.price * item.qty} €</div>
      <div>Amount: {item.qty}</div>
      <div className="button-container">
        <button type="button" className="btn btn-secondary btn-sm counter-button button-container__add
        " onClick={() => onAdd(item)}>+</button>
        <button type="button" className="btn btn-secondary btn-sm counter-button button-container__remove" onClick={() => onRemove(item)}>-</button>
        <button type="button" className="btn btn-secondary btn-sm counter-button button-container__reset" onClick={() => onReset(item)}>Reset</button>   
      </div>  
    </>
  );
}

export default ShoppingCard;
