/* import React, { useState } from 'react'
import TestForm from './TestForm';
import Test from './Test';

function ProductList() {
    const defaultProducts = [
        {id: 1, product: 'product 1'},
        {id: 2, product: 'product 2'},
        {id: 3, product: 'product 3'},
        {id: 4, product: 'product 4'},
        {id: 5, product: 'product 5'}
    ]
    const [products, setProducts] = useState(defaultProducts);

    

    const addProduct = (newProduct) => {
        setProducts([
            ...products,
            newProduct
        ])
    }

    return (
        <div>

            <Test addProduct={addProduct}/>

            <ul>
                {
                    products.map((product) => (
                        product.id % 2 !== 0
                            ? <Test key={product.id} classes="odd" product={product}/>
                            : <Test key={product.id} classes="" product={product}/>
                    ))   
                }
            </ul>
        </div>
    )
}

export default ProductList  */