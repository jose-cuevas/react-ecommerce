import { Link, useParams } from 'react-router-dom';
import products from '../../data/products';

import "./productDetail.css"

function ProductDetail() {
  const {productId} = useParams()
  

  const product = products.find(product => product.id == productId)
  

  const {title, price, img} = product
  return (
    <>
    {/* <Link to="/">Back Home</Link> */}
    <h1 className="text-center mb-5">{title}</h1>
    <article className="productDetail-container">
      
      <img src={img} alt="" className='container-sm productDetail-container__img mb-5' />      
      <p className=" lead mb-4">Price: {price}€</p>
      <p>Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis similique consequatur laudantium rerum eos odio, officiis nesciunt aspernatur asperiores ut delectus nulla adipisci itaque ratione consectetur nam. Molestiae, distinctio cupiditate?</p>
    </article>   

    
    </>
  )
}

export default ProductDetail