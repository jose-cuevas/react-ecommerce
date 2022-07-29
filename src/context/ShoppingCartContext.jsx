import React from "react"
import { useState } from 'react'



export const ShoppingContext = React.createContext({})

export default function ShoppingCartContext({children}) {
const [cartItems_1, setCartItems_1] = useState([])
  return (
    
    <ShoppingContext.Provider value={{cartItems_1, setCartItems_1}}>{children}</ShoppingContext.Provider>
  )
}
