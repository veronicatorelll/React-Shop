import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';



function Checkout({cartProducts}) {
  var total = 0

  
  
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
                    </div>
                } else { return console.log("checkout trouble") } 
                
              })
          }
        
         
        {
          total <1
          ? "Checkout is empty"
          : `Cart Total: ${total}$` 
          
        }
                  <h3>Total:{total}</h3>


          </div>
         



  )
}

export default Checkout

 
      // <Link to ="/">Continue Shopping!</Link>