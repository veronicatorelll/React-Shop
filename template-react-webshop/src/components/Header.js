import {Link} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import Cart from "./Cart"

function Header({cartProducts, setCartProducts}) {
  return (
    <div className="header">
      <Link to ="/"><h2>Header</h2></Link>
      <Link to="/cart">
        {<FaShoppingCart />}
        </Link>
      <Cart cartProducts={cartProducts} setCartProducts={setCartProducts}/>



      
      <p>Free shipping on orders over SEK 499 / Fast delivery 1-2 weekdays / Free return - 30 days - prepaid return label</p>
    </div>
  )
}

export default Header