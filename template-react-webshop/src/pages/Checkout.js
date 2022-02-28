//Veronicas del
//Skapar en enskild component för formuläret som ska innehålla produkterna
//Formulär för personuppgifter också? 
import React from 'react';
import {Link} from "react-router-dom";



function Checkout({checkoutProducts}) {
  var total = 0
  
    return (
      <div className="checkout">
        <h2>Checkout</h2>
          {
              checkoutProducts.map(product =>              
              {
    
                if(product.checkout === true) {
                  total += product.price
                  return <div key={product.id}>
                      <p>Title: {product.title}</p>
                      <p>Price: {product.price}</p>
                      <p>Id: {product.id}</p>
                    </div>
                } else { <div>Test</div> } 
                
              })
          }
        
          <h3>Total:{total}$</h3>


          </div>
  )
}

export default Checkout

 
      // <Link to ="/">Continue Shopping!</Link>