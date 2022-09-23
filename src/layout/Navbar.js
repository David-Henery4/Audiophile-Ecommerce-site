import React from 'react'
import {Burger,Logo, Cart} from "../assets/svgsComps"
import linkListData from "../link-list-data/linkListData";

// WILL ADD (UL - LINKS)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-burger">
        <Burger />
      </div>
      <div className="navbar-logo">
        <Logo />
      </div>
      <ul className="navbar-links sub-title-style">
        {linkListData.map((li) => {
          return (
            <li className='navbar-links__link' key={li.id}>
              <p>{li.linkTo}</p>
            </li>
          );
        })}
      </ul>
      <div className="navbar-cart">
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar