import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';



function Checkout({cartProducts}) {
  var total = 0
  const {isEmpty, setIsEmpty} = useState(false);

  
  
    return (
      <div className="cart">
        <h2>Checkout</h2>
          {
              cartProducts.map(product =>              
              {
    
                if(product.cart === true) {
                  total += product.price
                  return <div key={product.id}>
                      <p>Title: {product.title}</p>
                      <p>Price: {product.price}</p>
                      <div className="cartpicture">
                      <img src={product.url} alt="" />
                    </div>
                    </div>
                } else { return console.log("trouble in  cart") } 
                
              })
          }
        
          <h3>Total:{total}</h3>

          <div className="empty-cart">
            {isEmpty && <div>Your cart is empty</div>}
       </div>


          </div>
         



  )
}

export default Checkout

 
      // <Link to ="/">Continue Shopping!</Link>