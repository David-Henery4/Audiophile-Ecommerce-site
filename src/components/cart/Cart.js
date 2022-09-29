import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {toggleCart, toggleOverlay} from "../../features/cart/cartSlice";
import { xx59, xx99MK2, yx1 } from "../../assets/cart";

const Cart = () => {
  const dispatch = useDispatch()
  const { isCartActive } = useSelector((store) => store.cart);
  //
  const handleCheckoutClick = () => {
    dispatch(toggleCart())
    dispatch(toggleOverlay())
  }
  //
  return (
    <div className={isCartActive ? "cart cart-active" : "cart"}>
      <div className="cart-top">
        <h6 className="cart-top__header">Cart (3)</h6>
        <button className="cart-top__remove-btn">Remove all</button>
      </div>
      <div className="cart-items">
        <div className="cart-items-item">
          <img className="cart-items-item__img" src={xx59} alt="item" />
          <p className="cart-items-item__name">xx99 MK II</p>
          <p className="cart-items-item__price">$2,999</p>
          <div className="cart-items-item-quantity">
            <p className="cart-items-item-quantity__minus">-</p>
            <p className="cart-items-item-quantity__amount">1</p>
            <p className="cart-items-item-quantity__plus">+</p>
          </div>
        </div>
        <div className="cart-items-item">
          <img className="cart-items-item__img" src={xx99MK2} alt="item" />
          <p className="cart-items-item__name">xx99 MK II</p>
          <p className="cart-items-item__price">$2,999</p>
          <div className="cart-items-item-quantity">
            <p className="cart-items-item-quantity__minus">-</p>
            <p className="cart-items-item-quantity__amount">1</p>
            <p className="cart-items-item-quantity__plus">+</p>
          </div>
        </div>
        <div className="cart-items-item">
          <img className="cart-items-item__img" src={yx1} alt="item" />
          <p className="cart-items-item__name">xx99 MK II</p>
          <p className="cart-items-item__price">$2,999</p>
          <div className="cart-items-item-quantity">
            <p className="cart-items-item-quantity__minus">-</p>
            <p className="cart-items-item-quantity__amount">1</p>
            <p className="cart-items-item-quantity__plus">+</p>
          </div>
        </div>
      </div>
      <div className="cart-pricing">
        <p className="cart-pricing__total">TOTAL</p>
        <p className="cart-pricing__price">$5,396</p>
      </div>
      <Link to="/checkout" className="cart__checkout-btn" onClick={handleCheckoutClick}>
        <button className="btn-basic-1 cart__checkout-btn">CHECKOUT</button>
      </Link>
    </div>
  );
};

export default Cart;
