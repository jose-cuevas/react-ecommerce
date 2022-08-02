import React from "react";

import { useEffect, useState, useReducer, createContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { useFetch } from "./components/hooks/useFetch";

import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./components/Products/Products";
import Shopping from "./components/Shopping/Shopping";
import WishList from "./components/WishList/WishList.jsx";
import Login from "./components/Login/Login.jsx";
import SigIn from "./components/SigIn/SigIn.jsx";
import ForgotPassword from "./components/forgotPassword/ForgotPassword.jsx";
import Payment from "./components/Payment/Payment.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Error from "./components/Error/Error.jsx";

// import products from "./data/products";
import swal from "sweetalert";
import Swal from "sweetalert";
import "./App.css";

// * Creating context for cartItems array
export const CartContext = React.createContext({});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // --------------------------------
  // --------------------------------
  // --------------------------------
  // --------------------------------
  // * useReducer() whishList

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_WISHLIST":
        if (checkWish(action.payload.id, state)) {
          console.error("This article is in the wish list");
        } else {
          return [...state, action.payload];
        }
      case "REMOVE_WISHLIST":
        return state.filter((wishItem) => wishItem.id !== action.payload.id);

      default:
        return state;
    }

    // if (action.type === "REMOVE_WISHLIST") {
    //   return state.filter((wishItem) => wishItem.id !== action.payload.id);
    // }
  };

  const checkWish = (id, state) => {
    const exist = state.find((item) => item.id === id);
    if (exist) {
      return true;
    } else {
      return false;
    }
    // console.log(exist)
  };

  const initialState = JSON.parse(localStorage.getItem("state")) || [];
  // console.log(initialState);
  // const initialState = [];

  // const init = () => {
  //   return JSON.parse(localStorage.getItem("state")) || initialState;
  // };
  // console.log(init())
  //  const [state, dispatch] = useReducer(reducer, initialState, init);
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save wishLIst on localStorage
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const addWishList = (wishItem) => {
    dispatch({ type: "ADD_WISHLIST", payload: wishItem });
  };

  const removeWishList = (wishItem) => {
    dispatch({ type: "REMOVE_WISHLIST", payload: wishItem });
  };

  // * useReducer() whishList ends here
  // --------------------------------
  // --------------------------------
  // --------------------------------
  // --------------------------------

  // Fectching products from API
  const url = "http://localhost:7000/products";

  const getProducts = async () => {
    const response = await fetch(url);
    // console.log(response);
    const products = await response.json();
    // console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // * Getting cart items from local Storage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  const onAdd = (product) => {
    // swal("item added");
    // Swal({
    //   icon: "success",
    //   title: "Product added",
    //   text: "Enjoy you purchase!",
    // });

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    const exist = cartItems.find((item) => item.id === product.id);
    console.log(exist);
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
    Swal({
      icon: "error",
      title: "Product delete",
      text: "See you soon!",
    });
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Navbar cartItems={cartItems} state={state} />
        {/* Route */}
        <BrowserRouter>
          {/* <Navbar/>    */}
          <Routes>
            {/* Dashboard Route starts here */}
            <Route
              path="/"
              element={
                <main className="app-container__flex">
                  <Products
                    products={products}
                    onAdd={onAdd}
                    showAlert={showAlert}
                    addWishList={addWishList}
                  />
                  <Shopping
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onReset={onReset}
                  />
                </main>
              }
            />
            <Route path="/products/:productId" element={<ProductDetail />} />

            {/* Dashboard Route ends here */}

            <Route
              path="/wishlist"
              element={
                <WishList
                  state={state}
                  onAdd={onAdd}
                  addWishList={addWishList}
                  removeWishList={removeWishList}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  products={products}
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onReset={onReset}
                />
              }
            />
            <Route path="/sigin" element={<SigIn />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route
              path="/payment"
              element={
                <Payment onAdd={onAdd} onRemove={onRemove} onReset={onReset} />
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
