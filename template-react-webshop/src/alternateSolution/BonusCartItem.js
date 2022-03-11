import React from 'react'

function BonusCartItem({product, bonusCart, setBonusCart}) {

  const removeFromBonusCart = (product) => {
    const exist = bonusCart.find(bonusCartItem => bonusCartItem.id === product.id)
    if(exist) {
      setBonusCart(bonusCart.filter(bonusCartItem => bonusCartItem.id !== product.id))
     }
  }

  return (
    <div key={product.id}>
      {
        <div>
          <h1>{product.title}</h1>
          <h3>Price:{product.price}$</h3>
          <h4>Qty:{product.qty}</h4>
          <button onClick={() => removeFromBonusCart(product)}>Remove From Cart</button>
        </div>
      }
    </div>
  )
}

export default BonusCartItem