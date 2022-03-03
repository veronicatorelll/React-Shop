import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';



function Checkout({cartProducts, setCartProducts}) {
  var total = 0

  const removeFromCart = id => {
    console.log(id)
    setCartProducts(cartProducts.map((product) => product.id === id
    ? {...product, cart: false}
    : product
  ))
  }
  
  
    return (
      <div className="cart">
        <h2>Checkout</h2>
          {
              cartProducts.map(product =>              
              {
    
                if(product.cart === true) {
                  total += product.price  * product.quantity
                  return <div key={product.id}>
                      <p>Title: {product.title}</p>
                      <p>Price: {product.price}</p>
                      <p>Quantity: {product.quantity}</p>
                      <div className="cartpicture">
                      <img src={product.url} alt="" />
                    </div>
                    <button onClick={() => removeFromCart(product.id )}>Remove</button>

                    </div>
                } else { return console.log("checkout trouble") } 
                
              })
          }
        
         
        {
          total <1
          ?  "You have 0 products"
          : `Total: ${total}$` 
          
        }

                  <Link className='continue' to ="/">Continue shopping!</Link>


          </div>
         



  )
}

export default Checkout

 
      // <Link to ="/">Continue Shopping!</Link>