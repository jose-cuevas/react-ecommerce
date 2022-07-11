import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./components/Products/Products";
import Shopping from "./components/Shopping/Shopping";

import Login from "./components/Login/Login.jsx"

import products from "./data/products";

import "./App.css";


function App() { 

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);


  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }    
  };
  
  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const onReset = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));    
  }

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (    
    <>
    {/* Route */}
    <BrowserRouter> 
    {/* <Navbar/>    */}
      <Routes>
        <Route path="/" element={<main className="app-container__flex">
        <Products
          products={products}
          onAdd={onAdd}
        />
        <Shopping                 
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onReset={onReset}
        />
        </main>}/>        
        
        <Route path="login" element={<Login/>}/>
      {/* </main>     */}
    </Routes>
    </BrowserRouter>

{/* 
      <main className="app-container__flex">
        <Products
          products={products}
          onAdd={onAdd}
        />
        <Shopping                 
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onReset={onReset}
        />
      </main> */}
      
    </>
  );
  
}

export default App;
