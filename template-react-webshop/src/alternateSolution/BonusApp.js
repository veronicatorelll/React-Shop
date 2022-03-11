import React, {useEffect, useState} from "react"
import {PageContainer, BonusContainer} from './BonusStyling'
import BonusProducts from './BonusProducts';
import BonusCart from './BonusCart';

function BonusApp() {

const fetchData = async () => {
    try {
        const response = await fetch('https://codexplained.se/electronics.php');
        const data = await response.json();
        
        setBonusProducts(data);
    } catch(error) {
        console.log(error);
    }
}

useEffect( () => {
    fetchData();
}, [])

const [bonusProducts, setBonusProducts] = useState([])
const [bonusCart, setBonusCart] = useState([]);
const [bonusQuantity, setBonusQuantity] = useState(1)
// ----------Buttons-------------------------------

const addToBonusCart = (product) => {
    const exist = bonusCart.find(bonusCartItem => bonusCartItem.id === product.id)
    if(exist) {
      setBonusCart(bonusCart.map(bonusCartItem => bonusCartItem.id === product.id ? {...exist, qty: exist.qty + parseInt(bonusQuantity)} : bonusCartItem)) 
    } else {
      setBonusCart([...bonusCart, {...product, qty: parseInt(bonusQuantity)}])
    }
    setBonusQuantity(1)
  }

  return (
    <PageContainer>
            <BonusContainer>
              <BonusProducts bonusProducts={bonusProducts} addToBonusCart={addToBonusCart} setBonusQuantity={setBonusQuantity} />
              <BonusCart bonusCart={bonusCart} setBonusCart={setBonusCart} />
            </BonusContainer>
    </PageContainer>
  )
}

export default BonusApp