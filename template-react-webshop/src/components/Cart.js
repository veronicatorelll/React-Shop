import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <div>
      <h2>Cart</h2>
      <Link to="/checkout">Go to Checkout</Link>
      <br></br>
      <Link to ="/">Go back to Products</Link>


      </div>
  )
}

export default Cart

