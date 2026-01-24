import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <Link className='home' to='/'>Home</Link>
      <Link className='home' to='/about'>About</Link>
      <Link className='home' to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar
