import { Link } from 'react-router-dom'
import {CartImage} from "../styles/styledCart"

function Cart({cartProducts, setCartProducts}) {
  var total = 0

  // ---------- Delete from Cart ---------------------
  const removeFromCart = id => {
    console.log(id)
    setCartProducts(cartProducts.map((product) => product.id === id
    ? {...product, cart: false}
    : product
  ))
  }

  // ---------- Delete All ---------------------
    const deleteAll = () => {
      setCartProducts(cartProducts.map((product) => product.cart === true
      ? {...product, cart: false}
      : product
    ))
   }


  return (
    <div className="cart">
      <h2>Cart</h2>
        {
            cartProducts.map(product =>              
            {
  
              if(product.cart === true) {
                total += product.price * product.quantity
                return <div key={product.id}>
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Id: {product.id}</p>
                    <p>Quantity: {product.quantity}</p>
                    <div className="cartpicture"> 
                      <CartImage src={product.url} alt="missing picture"/> 
                    </div>

                    <button className='remove-cart' onClick={() => removeFromCart(product.id)}>Remove From Cart</button>

                  </div>
              } else { return console.log("produkter ligger inte i cart") } 
              
            })
        }
      
      <div>
        {
          total < 1
          ? "No Products In Cart"
          : `Cart Total: ${total}$` 
        }
      </div>
      
      <button className='delete-cart' onClick={deleteAll}>Remove All Products From Cart</button>
      <h2>End Cart</h2>
      <Link className='link-checkout' to="/checkout">Go to Checkout</Link>
      <br></br>
      <Link className='link-backprod' to ="/">Go back to Products</Link>


      </div>
  )
}
export default Cart

