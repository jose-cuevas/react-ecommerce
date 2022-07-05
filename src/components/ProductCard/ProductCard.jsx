// import React from "react";

import './productCard.css';
import '../Products/products.css';

function ProductCard({children}) {
  return (
    <>
    {/* {console.log(children)} */}
      <div className="card">{children}</div>
    </>
  );
}

export default ProductCard;
