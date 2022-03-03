import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";



function Product ({setCartProducts, cartProducts}) {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const [quantity, setQuantity] = useState("")

    

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php?id='+ params.testid);
            const data = await response.json();

            setProduct(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchData();
    }, [])
    

    const addToCart = (e, id) => {
        e.preventDefault();
        if (cartProducts.length > 0) {
            setCartProducts(cartProducts.map((product)=> product.id === id
                ? {...product, cart: true, quantity: quantity}
                : product
                ))
                setQuantity("")

            } else {
                setCartProducts(product)
            }
        }
        

       
       
    
 
    const handleQuantityInput = (e) => {
     setQuantity(e.target.value)
     
   }
       

  return (
        <div>

            
            <h1>Product Page</h1>
       
            <h3>{product.title}</h3>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>In stock: {product.storage}</p>
            <div className="picture">
            <img src={product.url} alt=""/>

            <form onSubmit={(e) => addToCart(e, product.id)}>
                    <label>
                      Quantity
                      <input type="number" name="quantity" onChange={handleQuantityInput} value={quantity}/>
                    </label>
                    <button >Add</button>
                  </form>
            </div>
  
        </div>
    )
}


export default Product
