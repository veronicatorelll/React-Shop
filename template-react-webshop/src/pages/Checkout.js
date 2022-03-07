import {Link} from 'react-router-dom'
import { useState } from 'react';


function Checkout({cartProducts, setCartProducts}) {
  var total = 0
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState("")


// ------ Delete from Checkout ------
  const removeFromCart = id => {
    console.log(id)
    setCartProducts(cartProducts.map((product) => product.id === id
    ? {...product, cart: false}
    : product
  ))
  }
  
  // ------ Add to Checkout ------
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


  // ------ Handle quantity input ------
    const handleQuantityInput = (e) => {
      setQuantity(e.target.value)
      
    } 


  
    return (
      <div className="cart">
          {
              cartProducts.map(product =>              
              {
    
                if(product.cart === true) {
                  total += product.price  * product.quantity
                   return <div key={product.id}>
                    <div className='cart-wrap'>
                    <div className="cartpicture">
                      <img src={product.url} alt="" />
                    </div>
                    </div>
                      <p className='checkout-title'>Title: {product.title}</p>
                      <p className='checkout-price'>Price: {product.price}$</p>
                      <p className='checkout-quantity'>Quantity: {product.quantity}</p>
                    <button className='remove-checkout' onClick={() => removeFromCart(product.id )}>Remove</button>

            <form onSubmit={(e) => addToCart(e, product.id)}>
               <label className='label-addcart'>
                 <input type="number" min="1" placeholder='wanted amount...' name="quantity" onChange={handleQuantityInput} value={quantity.id}/>
                  </label>
                   <button className='addtocart'>Update quantity</button>
                    </form>
                  
                    </div>
                } else { return console.log("checkout trouble") } 
                
              })
          }
        
        <div className='total'>
         
        {
          total <1
          ?  "You have 0 products."
          : `Total: ${total}$` 
          
        }

        </div>
                  <Link className='continue' to ="/">Continue shopping!</Link>
          </div>

  )
}

export default Checkout

 
