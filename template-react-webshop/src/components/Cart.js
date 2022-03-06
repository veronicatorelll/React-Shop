import { Link } from 'react-router-dom'
import {CartImage, CartProductsContainer, CartPriceQty, CartButton, CartTotal, LinkContainer} from "../styles/styledCart"

function Cart({cartProducts, setCartProducts, setToggleCart, toggleCart}) {
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

   // ---------- Toggle Cart ---------------------
  const handleToggleCart = () => {
    setToggleCart(!toggleCart)
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
        {
            cartProducts.map(product =>              
            {
  
              if(product.cart === true) {
                total += product.price * product.quantity
                return <CartProductsContainer key={product.id}>
                    <h3>{product.title}</h3>
                    <CartPriceQty>
                      <p>Price: {product.price}$</p>
                      <p>Quantity: {product.quantity}</p>
                    </CartPriceQty>
                    <div className="cartpicture"> 
                      <CartImage src={product.url} alt="missing picture"/> 
                    </div>

                    <CartButton className='remove-cart' onClick={() => removeFromCart(product.id)}>Remove From Cart</CartButton>

                  </CartProductsContainer>
              } else { return console.log("produkter ligger inte i cart") } 
              
            })
        }
      
      <CartTotal>
        {
          total < 1
          ? "No Products In Cart"
          : `Cart Total: ${total}$` 
        }
      </CartTotal>
      
      <CartButton className='delete-cart' onClick={deleteAll}>Remove All Products From Cart</CartButton>
      <LinkContainer>
        <Link className='link-checkout' to="/checkout">
          <CartButton onClick={handleToggleCart}>
            Go to Checkout
          </CartButton>
        </Link>
        
        <Link className='link-backprod' to ="/">
          <CartButton onClick={handleToggleCart}>
            Go back to Products
          </CartButton>
        </Link>
      </LinkContainer>

      </div>
  )
}
export default Cart

