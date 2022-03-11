import {SectionTitle} from './BonusStyling'

function BonusProducts({bonusProducts, setBonusQuantity, addToBonusCart}) {
  
  const handleBonusSubmit = (e, product) => {
    e.preventDefault()
    addToBonusCart(product)
    e.target.reset()
    }

  return (
    <div>
      <SectionTitle>Alternate Solution Products</SectionTitle>
      {
        bonusProducts.map(product => ( 
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h4>Price:{product.price}$</h4>
          <form onSubmit={(e) => handleBonusSubmit(e, product)}>
            <input type="number" min="1" onChange={(e) => {if(e.target.value >= 1) setBonusQuantity(e.target.value)}}/>
            <button>Add To Cart</button>
          </form>
        </div>
      ))
      }
    </div>
  )
}

export default BonusProducts