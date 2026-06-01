import React from 'react'
import logo from '../assets/logo.svg'
import Button from './Button'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" />
      <Button />
    </nav>

  )
}

export default Navbar