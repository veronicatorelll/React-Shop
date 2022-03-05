import React, {useEffect, useState} from "react"  
import {Link} from "react-router-dom"
import {Image, ProductsContainer, ProductContainer} from "../styles/styledProducts"

function Products({setCartProducts, cartProducts}) {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState("")

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


  // ---------- Add to Cart ---------------------
  
  const addToCart = (e, id) => {
    e.preventDefault();
    console.log(id)
    console.log(quantity)
     setCartProducts(cartProducts.map((product) => product.id === id
     ? {...product, cart: true, quantity: quantity}
     : product
   ))
   setQuantity("")
   }

  // ---------- Handle Quantity Input ---------------------
  const handleQuantityInput = (e) => {
    setQuantity(e.target.value)
    
  }

  return (
    <ProductsContainer>        
        {
            products.map((product) => (
              <ProductContainer key={product.id}>
                  <p>Title: {product.title}</p>
                  <p>Description: {product.description}</p>
                  <p>Price: {product.price}</p>
                  <p>Storage: {product.storage}</p>
                  <div className="picture">
                    <Image src={product.url} alt="missing picture" />
                  </div>
                  <Link className="link-toprod" to={`/product/${product.id}`}>Go to product</Link>


                  <form onSubmit={(e) => addToCart(e, product.id)}>
                    <label>
                      Quantity
                      <input type="number" name="quantity" onChange={handleQuantityInput} value={quantity}/>
                    </label>
                    <button className="add-tocart" >Add To Cart</button>
                  </form>
              </ProductContainer>
            ))
        }
    </ProductsContainer>
  )
}

export default Products