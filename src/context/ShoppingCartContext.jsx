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

const cartItems = getCartItems()  

  return (    
    <ShoppingContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingContext.Provider>
  );
}
