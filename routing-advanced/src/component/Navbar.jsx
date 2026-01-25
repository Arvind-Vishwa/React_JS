import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-cyan-600'>
      <h2 className='text-xl font-bold'>Portfolio</h2>
      <div className='flex gap-8'>
        {/* <a className='text-lg font-bold' href='/home'>Home</a>
        <a className='text-lg font-bold' href='/about'> About</a>
        <a className='text-lg font-bold' href='/contact'>Contact</a> */}
        <Link to='/home'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  )
}

export default Navbar
