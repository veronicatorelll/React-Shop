import React, {useEffect, useState} from "react"  
import {Link} from "react-router-dom"

function Products() {
  const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php');
            const data = await response.json();
            console.log(data);
            
            setProducts(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect( () => {
        fetchData();
    }, [])

  return (
    <div>
        <h1>Products</h1>
        {
            products.map((product) => (
              <div key={product.id}>
                <Link to={`/${product.id}`}>
                  <p>{product.title}</p>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                  <p>{product.storage}</p>
                  <div className="bild">
                    <img src={product.url} alt="bild saknas" />
                  </div>
                  </Link>
              </div>
            ))
        }
    </div>
  )
}

export default Products