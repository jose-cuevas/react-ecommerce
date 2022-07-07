import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Shopping from "./components/Shopping/Shopping";

import products from "./data/products";

import "./App.css";

// console.log(products)

function App() {
  const [count, setCount] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);

  // console.log(count);
  // console.log(cart);
  console.log(shoppingCart);
  // console.log(products)

  useEffect(() => {
    // localStorage.setItem('product', JSON.stringify(products))
    localStorage.setItem("count", JSON.stringify(count));
  });

  return (
    <>
      <main className="app-container__flex">
        <Products
          products={products}
          count={count}
          setCount={setCount}
          cart={shoppingCart}
          setCart={setShoppingCart}
        />
        <Shopping
          products={products}
          count={count}
          setCount={setCount}
          cart={shoppingCart}
          setCart={setShoppingCart}
        />
      </main>
    </>
  );
}

export default App;
