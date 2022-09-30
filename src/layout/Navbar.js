import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {toggleOverlay, toggleCart} from "../features/cart/cartSlice";
import {toggleDropDownNav, closeDropDownNav, openDropDownNav} from "../features/store/storeSlice";
import { Burger, Logo, CartIcon } from "../assets/svgsComps";
import { Cart } from "../components/cart";
import {CategoryList} from "../components/repeating";
import linkListData from "../link-list-data/linkListData";

// WILL ADD (UL - LINKS)

const Navbar = () => {
  const { isDropDownNavActive } = useSelector((store) => store.store);
  const dispatch = useDispatch()
  //
  const handleToggleCart = () => {
    dispatch(toggleOverlay())
    dispatch(toggleCart())
  }
  //
  const handleDropDown = () => {
    dispatch(toggleDropDownNav())
    dispatch(toggleOverlay());
  }
  //
  return (
    <nav className="navbar" id="nav">
        {isDropDownNavActive && <CategoryList />}
      <div className="navbar-content">
        <div className="navbar-burger" onClick={handleDropDown}>
          <Burger />
        </div>
        <div className="navbar-logo">
          <Link to="/">
            <Logo />
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
        {/* <Link to="/checkout">
          </Link> */}
        <div className="navbar-cart" onClick={handleToggleCart}>
          <CartIcon />
        </div>
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
