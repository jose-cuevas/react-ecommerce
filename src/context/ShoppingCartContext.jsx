import React from "react";
import { createContext, useState, useEffect } from "react";


const getCartItems = ()=>{
    const cart = localStorage.get("cartItems")
    if (cart){
        return JSON.parse(localStorage.get("cartItems"))
    } else {
        return []
    }
}

export const ShoppingContext = React.createContext({});

export default function ShoppingCartContext({ children }) {
  
//   const [text, setText] = useState("Hello!");
const cartItems = getCartItems()
  

  return (
    // <div>ShoppingCartContext</div>
    <ShoppingContext.Provider value={{ cartItems}}>
      {children}
    </ShoppingContext.Provider>
  );
}
