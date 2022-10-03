import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {toggleOverlay, toggleCart} from "../features/cart/cartSlice";
import {toggleDropDownNav} from "../features/store/storeSlice";
import { Burger, Logo, CartIcon } from "../assets/svgsComps";
import { Cart } from "../components/cart";
import {CategoryList} from "../components/repeating";
import linkListData from "../link-list-data/linkListData";

// WILL ADD (UL - LINKS)

const Navbar = () => {
  const { isDropDownNavActive } = useSelector((store) => store.store);
  const { isOrderConfirmed, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  //
  const handleToggleCart = () => {
    if (!isOrderConfirmed){
      dispatch(toggleOverlay())
      dispatch(toggleCart())
    }
  }
  //
  const handleDropDown = () => {
    if (!isOrderConfirmed) {
      dispatch(toggleDropDownNav())
      dispatch(toggleOverlay());
    }
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
          <Link
            style={{ pointerEvents: isOrderConfirmed ? "none" : "" }}
            to="/"
          >
            <Logo />
          </Link>
        </div>
        <ul className="navbar-links sub-title-style">
          {linkListData.map((li) => {
            return (
              <li key={li.id}>
                <Link
                  style={{ pointerEvents: isOrderConfirmed ? "none" : "" }}
                  to={li.path}
                  className="navbar-links__link"
                >
                  <p>{li.linkTo}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="navbar-cart" onClick={handleToggleCart}>
          {cartItems.length >= 1 && (
            <div className="navbar-cart-amount">{cartItems.length}</div>
          )}
          <CartIcon />
        </div>
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
