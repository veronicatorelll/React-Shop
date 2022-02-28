import { Link } from 'react-router-dom'

function Cart({cartProducts}) {
var total = 0

  return (
    <div className="cart">
      <h2>Cart</h2>
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
              } else { return console.log("test") } 
              
            })
        }
      
        <h4>Cart Total: {total}$</h4>
      <h2>End Cart</h2>
      <Link to="/checkout">Go to Checkout</Link>
      <br></br>
      <Link to ="/">Go back to Products</Link>


      </div>
  )
}

export default Cart

