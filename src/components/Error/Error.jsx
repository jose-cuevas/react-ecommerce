import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import "./error.css";

// useEffect(() => {
setTimeout(() => {
  useNavigate("/");
}, 3000);
// });

function Error() {
  return (
    <>
      {<Link to="/">Go Home Page</Link>}
      <section className="">
        <h1>Error 404</h1>
        <p>Redirected to home page</p>
      </section>
    </>
  );
}

export default Error;
