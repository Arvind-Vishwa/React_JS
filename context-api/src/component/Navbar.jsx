import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeContextData } from '../Context/ThemeContext';


const Navbar = (props) => {
    const data=useContext(ThemeContextData);
    console.log(data);
  return (
    <div className='navbar'>
      <h2>{data}</h2>
      <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
