import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./components/Products/Products";
import Shopping from "./components/Shopping/Shopping";
import Login from "./components/Login/Login.jsx"
import SigIn from "./components/SigIn/SigIn.jsx";
import Payment from "./components/Payment/Payment.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Error from "./components/Error/Error.jsx"


// import products from "./data/products";

import "./App.css";


function App() { 

  const [cartItems, setCartItems] = useState([]);

  // Fectching products from API
  const [products, setProducts] = useState([])
  const url = 'http://localhost:7000/products'
  
  const getProducts = async() =>{
    const response = await fetch(url)
    console.log(response)
    const products = await response.json()
    console.log(products) 
    setProducts(products)
  }
  
  useEffect(()=>{
    getProducts()
  },[])



  // Getting cart items from local Storage
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
        {/* Dashboard Route starts here */}
        <Route path="/" 
          element={<main className="app-container__flex">
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
          <Route path="/products/:productId" element={<ProductDetail/>}/> 
        
        {/* Dashboard Route ends here */}  

        
        <Route path="/login" element={<Login products={products} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onReset={onReset}/>}/>
        <Route path="/sigin" element={<SigIn/>}/>
        <Route path="/payment" element={<Payment cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onReset={onReset}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>      
    </>
  );
  
}

export default App;
