import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='text-xl font-size-bold'>
        <Outlet/>
        <Link to='/contact/client'>Men</Link>
        <Link to='/contact/company'>Women</Link>
        <br />
      Contact
      
    </div>
  )
}

export default Contact
