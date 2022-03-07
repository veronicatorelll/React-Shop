import React, {useState} from "react"
import {Link} from "react-router-dom"
import {Image, ProductContainer, ProductsButton, ProductsInput, ProductPrice, ProductsForm} from "../styles/styledProducts"

function Product({setCartProducts, cartProducts, product}) {

    const [quantity, setQuantity] = useState("")

    // ---------- Add to Cart ---------------------
    const addToCart = (e, id) => {
        e.preventDefault();
        console.log(id)
        console.log(quantity)
         setCartProducts(cartProducts.map((product) => product.id === id && quantity > 0
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
    <ProductContainer key={product.id}>
        <Link className="link-toprod" to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
        </Link>
        <ProductPrice>Price: {product.price}$</ProductPrice>
        <div>
            <Link className="link-toprod" to={`/product/${product.id}`}>
            <Image src={product.url} alt="missing picture" />
            </Link>
        </div>

        <ProductsForm onSubmit={(e) => addToCart(e, product.id)}>
            <p>Amount</p>
            <ProductsInput type="number" name="quantity" onChange={handleQuantityInput} value={quantity}/>
            <ProductsButton className="add-tocart" >Add To Cart</ProductsButton>
        </ProductsForm>
    </ProductContainer>
  )
}

export default Product