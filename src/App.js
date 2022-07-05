import "./App.css";
import Products from "./components/Products/Products";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    // <Article {...props}/>
    <>
      <main className="app-container__flex">
        <Products />
        <ShoppingCart />
      </main>
    </>
  );
}

export default App;
