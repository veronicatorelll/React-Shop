//Veronicas del
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <p className='copy'>&copy; VEDDIE.COM 2022. All rights reserved. </p>
      <Link className='contact-link' to ="/Contact">Contact us</Link> 
      <Link  className='about-link' to ="/About">About us</Link>



    </div>
  )
}

export default Footer