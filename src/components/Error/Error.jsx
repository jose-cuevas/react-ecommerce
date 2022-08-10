import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import "./error.css";

function Error() {
const navigate = useNavigate()

setTimeout(()=>{
  navigate('/')
}, 3000)

  return (
    <>
      <section className="container text-center">      
        <h1 className="mt-5">Error 404 - This page doesn´t exit</h1>
        <p className="lead mt-5">You´ll be redirected to home page soon ...</p>
      </section>
    </>
  );
}

export default Error;
