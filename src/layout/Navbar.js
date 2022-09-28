import React from "react";
import { Link } from "react-router-dom";
import { Burger, Logo, Cart } from "../assets/svgsComps";
import linkListData from "../link-list-data/linkListData";

// WILL ADD (UL - LINKS)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-burger">
          <Burger />
        </div>
        <div className="navbar-logo">
          <Link to="/">
            <Logo/>
          </Link>
        </div>
        <ul className="navbar-links sub-title-style">
          {linkListData.map((li) => {
            return (
              <li key={li.id}>
                <Link to={li.path} className="navbar-links__link">
                  <p>{li.linkTo}</p>
                </Link>
              </li>
            );
          })}
        </ul>
          {/* TEMP CHECKOUT LINK WILL BE ON CART MENU NOT ICON */}
          <Link to="/checkout">
        <div className="navbar-cart">
            <Cart />
        </div>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
