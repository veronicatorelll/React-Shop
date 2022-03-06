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
                      <p className='product-title'>Title: {product.title}</p>
                      <p className='price'>Price: {product.price}</p>
                      <p className='quantity'>Quantity: {product.quantity}</p>
                    <button className='remove-checkout' onClick={() => removeFromCart(product.id )}>Remove</button>

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

 
