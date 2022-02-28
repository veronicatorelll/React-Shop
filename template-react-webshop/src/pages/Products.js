import React, {useEffect, useState} from "react"  
import {Link} from "react-router-dom"

function Products({setCartProducts, cartProducts}) {
  const [products, setProducts] = useState([]);


  const fetchData = async () => {
      try {
          const response = await fetch('https://codexplained.se/electronics.php');
          const data = await response.json();
          
          setProducts(data);
      } catch(error) {
          console.log(error);
      }
  }

  useEffect( () => {
      fetchData();
  }, [])

  // ---------- Add to Cart ---------------------
  const addToCart = (id) => {
    console.log(id)
     setCartProducts(cartProducts.map((product) => product.id === id
     ? {...product, cart: true}
     : product
   ))
   }

  return (
    <div>
        <h1>All Products</h1>
        
        {
            products.map((product) => (
              <div key={product.id}>
                  <p>Title: {product.title}</p>
                  <p>Description: {product.description}</p>
                  <p>Price: {product.price}</p>
                  <p>Storage: {product.storage}</p>
                  <div className="picture">
                    <img src={product.url} alt="missing picture" />
                  </div>
                  <input />
                  <button onClick={() => addToCart(product.id)}>Add To Cart</button>

                 <Link to={`/product/${product.id}`}>Go to product</Link>
              </div>
            ))
        }
    </div>
  )
}

export default Products