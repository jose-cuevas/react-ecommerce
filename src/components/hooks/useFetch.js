import { useState, useEffect } from "react";



export const useFetch  = (url) => {
    const [products, setProducts] = useState([]);


    const getProducts = async () => {
        const response = await fetch(url);
        console.log(response);
        const products = await response.json();
        console.log(products);
        setProducts(products);
      };
    
      useEffect(() => {
        getProducts();
      }, [url]);

      return {products}

} 