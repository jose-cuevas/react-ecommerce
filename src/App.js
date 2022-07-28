import { useEffect, useState, useReducer } from "react";
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

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // --------------------------------
  // --------------------------------
  // --------------------------------
  // --------------------------------
  // * useReducer() whishList

  const reducer = (state, action) => {
    if (action.type === "ADD_WISHLIST") {
      const wishList = [...state, action.payload];
      const uniqueWishList = [...new Set(wishList)];
      return uniqueWishList;
    }

    if (action.type === "REMOVE_WISHLIST") {
      return state.filter((wishItem) => wishItem.id !== action.payload.id);
    }
  };

  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("state")) || initialState;
  };

  const [state, dispatch] = useReducer(reducer, initialState, init);

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

  // Getting cart items from local Storage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  const onAdd = (product) => {
    // swal("item added");
    Swal({
      icon: "success",
      title: "Product added",
      text: "Enjoy you purchase!",
    });

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
      <Navbar cartItems={cartItems} state={state}/>
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
                  addWishList={addWishList}
                />
                <Shopping
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onReset={onReset}
                />
              </main>
            }
          />
          <Route path="/products/:productId" element={<ProductDetail />} />

          {/* Dashboard Route ends here */}
          {console.log(state)}
          <Route
            path="/wishlist"
            element={
              <WishList
                state={state}
                onAdd={onAdd}
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
              <Payment
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onReset={onReset}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
