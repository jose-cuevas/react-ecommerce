import ProductCard from "../ProductCard/ProductCard.jsx";


function Products({ products, onAdd, addWishList }) {
  return (
    <>
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
