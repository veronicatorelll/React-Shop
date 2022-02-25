//Veronicas del
//Skapar en enskild component för formuläret som ska innehålla produkterna
//Formulär för personuppgifter också? 
import React from 'react';
import {Link} from "react-router-dom";
import Products from './Products';


function Checkout() {
  return (
    <div>
      <h2>Checkout</h2>
      <button>Continue shopping!</button>
      <Link to={`/products/${Products.id}`}>
            </Link>
      </div>
  )
}

export default Checkout