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

            <div className='product-wrap'>
            <div className="productpic">
            <img src={product.url} alt=""/>
            </div>
            <h3 className='product-title'>{product.title}</h3>
            <p className='description'>Description: {product.description}</p>
            <p className='price'>Price: {product.price}$</p>
            <p className='stock'>In stock: {product.storage}</p>
            
            <form onSubmit={(e) => addToCart(e, product.id)}>
                <label className='label-addcart'>
                 <input type="number" name="quantity" onChange={handleQuantityInput} value={quantity}/>
                </label>
                 <button className='addtocart'>Add to cart</button>
                  </form>
            </div>
  
        </div>
    )
}


export default Product
