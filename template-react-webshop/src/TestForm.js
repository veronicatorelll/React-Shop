/* import React, {useState} from 'react'

function Cart(props) {
    const [product, setProduct] = useState({description: ''});

    const handleChange = (e) => {
        let fieldValue = e.target.value;
        let fieldName = e.target.name;
        
        setProduct({
            ...product,
            [fieldName]: fieldValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const randomId = Math.random() * 1000;  

        const newProduct = {id: randomId, product: product.description};
        props.addProduct(newProduct)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" value={product.description} onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}


export default Cart  */