//Veronicas del
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <p className='copy'>&copy; Copyright, E/V</p>
      <Link to ="/Contact">Contact us</Link> |
      <Link to ="/About">About us</Link>



    </div>
  )
}

export default Footer