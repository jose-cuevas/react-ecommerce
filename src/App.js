import { useEffect, useState, useReducer, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./components/Products/Products";
import Shopping from "./components/Shopping/Shopping";
import WishList from "./components/WishList/WishList.jsx";
import Login from "./components/Login/Login.jsx";
import Payment from "./components/Payment/Payment.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Error from "./components/Error/Error.jsx";
import PrivateRoute from "./PrivateRoute";
import ContactPage from "./components/contactPage/ContactPage";

import AuthProvider from "./context/Auth/AuthContext";

// Context for cartItems array
export const CartContext = createContext({});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);    
  const [showAlert, setShowAlert] = useState({alertAdd: false, alertDelete: false});  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRegister, setUserRegister] = useState("");

  // --------------------------------
  // --------------------------------
  // useReducer() whishList

  const reducer = (state, action) => {
    if (action.type === "ADD_WISHLIST") {
      const exist = state.find((wishItem) => wishItem.id === action.payload.id);

      if (!exist) {
        const wishList = [...state, action.payload];
        const uniqueWishList = [...new Set(wishList)];        
        return uniqueWishList;
      } else if (exist) {
        return state;
      }
    }

    if (action.type === "REMOVE_WISHLIST") {
      return state.filter((wishItem) => wishItem.id !== action.payload.id);
    }
  };

  const initialState = JSON.parse(localStorage.getItem("state")) || [];

  const [state, dispatch] = useReducer(reducer, initialState);

  // Save wishLIst on localStorage
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));    
  }, [state]);

  const addWishList = (wishItem) => {
    setShowAlert({alertAdd: true});
    setTimeout(() => {
      setShowAlert({alertAdd: false});      
    }, 1000);
    dispatch({ type: "ADD_WISHLIST", payload: wishItem });
  };

  const removeWishList = (wishItem) => {
    setShowAlert({alertDelete: true});
    setTimeout(() => {
      setShowAlert({alertDelete: false});      
    }, 1000);
    dispatch({ type: "REMOVE_WISHLIST", payload: wishItem });
  };

  // * useReducer() whishList ends here
  // --------------------------------
  // --------------------------------

  // Fectching products from API
  const url = "http://localhost:7000/products";

  const getProducts = async () => {
    const response = await fetch(url);    
    const products = await response.json();    
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
    setShowAlert({alertAdd: true});
    setTimeout(() => {
      setShowAlert({alertAdd: false});      
    }, 1000);

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
    setShowAlert({alertDelete: true});
    setTimeout(() => {
      setShowAlert({alertDelete: false});      
    }, 1000);     
    
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
    setShowAlert({alertDelete: true});
    setTimeout(() => {
      setShowAlert({alertDelete: false});      
    }, 1000); 
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <AuthProvider>      
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <BrowserRouter>
            <Navbar
              cartItems={cartItems}
              state={state}
              showAlert={showAlert}
              isLoggedIn={isLoggedIn}              
            />            
            <Routes>
              {/* Dashboard Route starts here */}
              <Route
                path="/"
                element={
                  <main className="container">
                  <div className="row">
                    <Products 
                      products={products}
                      onAdd={onAdd}
                      addWishList={addWishList}
                      showAlert={showAlert}
                    />
                    <Shopping                       onAdd={onAdd}
                      onRemove={onRemove}
                      onReset={onReset}
                      showAlert={showAlert}
                    />
                    </div>
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
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    setUserRegister={setUserRegister}
                  />
                }
              />              
              <Route
                path="/payment"
                element={<PrivateRoute>
                  <Payment
                    onAdd={onAdd}
                    onRemove={onRemove}
                    onReset={onReset}
                    userRegister={userRegister}                    
                  /></PrivateRoute>
                }
              />
              <Route path="/contact" element={<ContactPage/>}></Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
