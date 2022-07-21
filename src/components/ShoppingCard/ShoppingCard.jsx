import { BsPlusLg, BsDashLg, BsTrash } from "react-icons/bs";

import "./ShoppingCard.css";
function ShoppingCard({ item, cartItems, onAdd, onRemove, onReset }) {
  return (
    <>
      <div className="container border mb-3 p-3">
        <div className="row">
          <div className="col-5 pt-2">
            <img src={item.img} alt="" className="item__img" />
          </div>
          <div className="col-7">
            <div >{item.title}</div>
            <div>Price: {item.price * item.qty} € </div>
            <div>Amount: {item.qty}</div>
            <div className="button-container d-flex">
              <button
                type="button"
                className="btn btn-sm button-container__add
        "
                onClick={() => onAdd(item)}
              >
                <BsPlusLg style={{ fontColor: "white" }} />
              </button>

              <button
                type="button"
                className="btn btn-sm button-container__remove"
                onClick={() => onRemove(item)}
              >
                <BsDashLg />
              </button>
              <button
                type="button"
                className="btn btn-sm button-container__reset"
                onClick={() => onReset(item)}
              >
                <BsTrash style={{ fontSize: "1.5rem" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCard;
