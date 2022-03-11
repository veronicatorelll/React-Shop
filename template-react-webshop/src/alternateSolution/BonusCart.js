import BonusCartItem from "./BonusCartItem"
import {SectionTitle} from './BonusStyling'
import { Link } from 'react-router-dom'

function BonusCart({bonusCart, removeFromBonusCart, setBonusCart}) {

  const total = bonusCart.reduce((prevValue, bonusCart) => prevValue + bonusCart.price * bonusCart.qty, 0)


  const removeAllFromBonusCart = () => {
    setBonusCart([])
  }

  return (
    <div>
      <SectionTitle>Alternate Solution Cart</SectionTitle>
      {
        bonusCart.map(product => (
        <div key={product.id}>
        <BonusCartItem product={product} bonusCart={bonusCart} setBonusCart={setBonusCart}/>
        </div>
      ))
      }

      <div>
        <h2>Total:{total}</h2>
        <button onClick={() => removeAllFromBonusCart()}>Remove All From Cart</button>
      </div>
      <Link to="/checkout"><button>Link to veddie.com checkout</button></Link>
      <Link to="/"><button>Link to veddie.com products</button></Link>
    </div>
  )
}

export default BonusCart