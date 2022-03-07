import React, {useEffect, useState} from "react"
import {ProductsContainer} from "../styles/styledProducts"
import Product from "../components/Product"

function Products({setCartProducts, cartProducts}) {
  const [products, setProducts] = useState([]);

// ---------- API --------------------- 
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

  return (
    <ProductsContainer>        
        {
            products.map((product) => (
              <Product product={product} setCartProducts={setCartProducts} cartProducts={cartProducts}/>
            ))
        }
    </ProductsContainer>
  )
}

export default Products