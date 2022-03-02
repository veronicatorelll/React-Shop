import React, {useState, useEffect} from 'react';
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
        console.log(id)
        console.log(quantity)
         setCartProducts(cartProducts.map((product) => product.id === id
         ? {...product, cart: true}
         : product
       ))
       }

    return (
        <div>

            
            <h1>Product Page</h1>
       
            <h3>{product.title}</h3>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>In stock: {product.storage}</p>
            <div className="pic">
            <img src={product.url} alt=""/>
            </div>

            
            <form onSubmit={() => addToCart(product.id)}>
                    <label>
                      <input type="number" />
                    </label>
                    <button >Add to cart</button>
                  </form>
            
            
            
        </div>
    )
}


export default Product
