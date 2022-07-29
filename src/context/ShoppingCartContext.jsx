import React from "react"
import { useState } from 'react'



export const CartItemsContext = React.createContext({})

export default function ShoppingCartContext({children}) {
const [cartItems, setCartItems] = useState([])
  return (
    
    <CartItemsContext.Provider value={{cartItems, setCartItems}}>{children}</CartItemsContext.Provider>
  )
}
