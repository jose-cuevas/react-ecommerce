import { BsPlusLg, BsDashLg, BsTrash } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

import "./ShoppingCard.css";

function ShoppingCard({ item, onAdd, onRemove, onReset }) {
  return (
    <>
      <article className="card border mb-3 m-2">
        <div className="d-flex justify-content-between align-items-center p-2">
            <img src={item.img} alt="" className="item__img rounded-circle mx-2" />
          
          <div className="">
            <div className="lh-sm">{item.title}</div>
            <div className="lh-sm">Price: {item.price * item.qty} € </div>
            <div className="lh-sm">Amount: {item.qty}</div>
            </div>
            <div className="mt-0">
              <button
                type="button"
                className="btn btn-sm button-container__add p-0
        "
                onClick={() => onAdd(item)}
              >
                <BsPlusLg style={{ fontSize: "0.8rem" }} />
              </button>

              <button
                type="button"
                className="btn btn-sm button-container__remove p-0"
                onClick={() => onRemove(item)}
              >
                <BsDashLg style={{ fontSize: "0.6rem" }}/>
              </button>
              <button
                type="button"
                className="btn btn-sm button-container__reset"
                onClick={() => onReset(item)}
              >
                <BsTrash style={{ fontSize: "1rem" }} />
              </button>
            </div>
          
        </div>
      </article>
    </>
  );
}

export default ShoppingCard;
