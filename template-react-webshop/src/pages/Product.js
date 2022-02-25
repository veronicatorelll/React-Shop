//Veronicas del
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";



function Product() {
    const [product, setProduct] = useState({});
    const params = useParams();
    

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/electronics.php?id='+params.testid);
            const data = await response.json();

            setProduct(data);
        } catch(error) {
        }
    }

    useEffect(() => {
        fetchData();
    }, );


    return (
        <div>
            <h1>Enskild produkt med id: {params.testid}</h1>
            <p>{product.content}</p>
            <div className="picture">
                <img src={product.url} />
            </div>
            <Link to="/cart">Add to cart</Link>


            

            

        </div>
    )


}

export default Product
