import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
const Navbar = () => {
  return (
    <div className='px-3 py-4 bg-gray-400 flex justify-end gap-3'>
      <Link to={"/"} >Home</Link>
      <Link to={"/services"} >Services</Link>
      <Link>Products</Link>
      <Link to={"/cart"} >Cart</Link>
    </div>
  )
}

export default Navbar
