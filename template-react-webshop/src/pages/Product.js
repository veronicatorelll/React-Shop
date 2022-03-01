import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";



function Product ({setCartProducts, cartProducts, products}) {
    const [product, setProduct] = useState({});
    const params = useParams();
    

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php?id='+ params.testid);
            const data = await response.json();

            setProduct(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Kan jag använda addToCart (finns redan i Products)?
    const addToCart = (id) => {
        console.log(id)
         setCartProducts(cartProducts.map((product) => product.id === id
         ? {...product, cart: true}
         : product
       ))
       }

    return (
        <div>

            
            <h1>Product Page</h1>
       {
            
           products.map((product) => (
            <div key={product.id}>

            <h3>{product.title}</h3>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Storage: {product.storage}</p>
            <p>Hallå {params.testid}</p>

            <div className="picture">
            <img src={product.url} alt=""/>
            </div>
            
            <button onClick={() => addToCart(product.id)}>Add</button> 
        </div>
    ))
     }





        </div>
    )

}

export default Product
