import ProductCard from "../ProductCard/ProductCard.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";


function Products({ products, onAdd, addWishList, searchTerm }) {
  return (
    <>
    <SearchForm/>
    {searchTerm !== "" && (
      products.filter((product)=>(
<div className="col-md-4 col-lg-3 p-0">
              <ProductCard
                key={product.id}
                product={product}
                onAdd={onAdd}
                addWishList={addWishList}
              />
              </div>

      ))}
      <section className="col-md-8">        
        <div className="row">
          
            {products.map((product) => (
              <div className="col-md-4 col-lg-3 p-0">
              <ProductCard
                key={product.id}
                product={product}
                onAdd={onAdd}
                addWishList={addWishList}
              />
              </div>
            ))}          
        </div>
      </section>
    </>
  );
}

export default Products;
