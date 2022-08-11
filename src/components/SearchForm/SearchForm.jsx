import React from "react";
import { useRef } from "react";

export default function SearchForm({ searchTerm, setSearchTerm }) {
  
const searhValue = useRef('')

const handleSubmit = (e) =>{
    e.preventdefault()
}

const searchProduct = () =>{
    setSearchTerm(searhValue.current.value)
}

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" ref={searhValue} onChange={searchProduct} />
    </form>
    </>
    
  );
}
