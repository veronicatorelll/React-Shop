import {Link} from 'react-router-dom'



function Checkout({cartProducts}) {
  var total = 0;
  
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
                      <p>Id: {product.id}</p>
                      <div className="cartpicture">
                      <img src={product.url} alt="missing picture" />
                    </div>
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