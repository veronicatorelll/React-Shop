import { Link } from 'react-router-dom'

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


  return (
    <div>
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

                    <button onClick={() => removeFromCart(product.id)}>Remove From Cart</button>

                  </div>
              } else { return console.log("produkter ligger inte i cart") } 
              
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

