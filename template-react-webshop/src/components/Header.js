import {Link} from "react-router-dom"
import React, {useState} from "react"
import {FaShoppingCart} from "react-icons/fa"
import Cart from "./Cart"
import {HeaderStyle, Info, DropdownCart, HeaderContent, Dropdown, Logo, AlternateSolution} from "../styles/styledHeader"
import { motion } from 'framer-motion'

function Header({cartProducts, setCartProducts}) {

  const [toggleCart, setToggleCart] = useState(false)

  // ---------- Toggle Cart ---------------------
  const handleToggleCart = () => {
    setToggleCart(!toggleCart)
  }
  
  return (
    <HeaderStyle>

      <motion.p
       animate={{ rotate: 360 }}
       transition={{ duration: 2 }}
      >
      <Info>Free shipping on orders over $ 49 / Fast delivery 1-2 weekdays / Free return - 30 days - prepaid return label</Info>
      </motion.p>
      <HeaderContent>
        <Logo>    
          <Link className="header-link" to ="/"><h1>veddie.com</h1></Link>
          <AlternateSolution>
            <Link className="header-link" to ="/BonusApp"><h5>Press Here For Alternate Solution</h5></Link>
          </AlternateSolution>
        </Logo>
        <Dropdown>
          <FaShoppingCart className="FaShoppingCart" onClick={handleToggleCart}/>
          <DropdownCart toggleCart={toggleCart}>
              <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} toggleCart={toggleCart} setToggleCart={setToggleCart}/>
          </DropdownCart>
        </Dropdown>
      </HeaderContent>
    </HeaderStyle>
  )
}

export default Header