import React from 'react'
import {Burger,Logo, Cart} from "../assets/svgsComps"

// WILL ADD (UL - LINKS)

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-burger">
        <Burger/>
      </div>
      <div className="navbar-logo">
        <Logo/>
      </div>
      <div className="navbar-cart">
        <Cart/>
      </div>
    </nav>
  )
}

export default Navbar