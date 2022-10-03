import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {setIsOrderConfirmed, closeOverlay, clearCart, } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom"; 
import { ConfirmedOrderIcon } from "../../assets/svgsComps";
import { useState } from "react";

const OrderConfirmation = () => {
  const [showAllItems, setShowAllItems] = useState(false)
  const dispatch = useDispatch()
  const { isOrderConfirmed, cartItems, grandTotal } = useSelector(
    (store) => store.cart
  );
  return (
    <div
      className={
        isOrderConfirmed ? "confirmation confirmation-active" : "confirmation"
      }
    >
      <ConfirmedOrderIcon className="confirmation__icon" />
      <div className="confirmation-header">
        <h3 className="confirmation-header__title">THANK YOU FOR YOUR ORDER</h3>
        <p className="confirmation-header__text body-text">
          You will receive an email confirmation shortly
        </p>
      </div>
      {/**/}
      <div className="confirmation-info">
        {/**/}
        <div className="confirmation-info-top">
          <div className="confirmation-items">
            {cartItems.map((item, i) => {
              if (i > 0 && !showAllItems) return null;
              return (
                <div key={item.id} className="confirmation-items-item">
                  <img
                    className="confirmation-items-item__image"
                    src={require(`../../assets/${item.cartImage}`)}
                    alt={`item-${item.nickName}-cart-img`}
                  />
                  <p className="confirmation-items-item__name">
                    {item.nickName}
                  </p>
                  <p className="confirmation-items-item__price">{item.price}</p>
                  <p className="confirmation-items-item__quantity">
                    x{item.itemQuantity}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="confirmation-items-total">
            <p
              className="confirmation-items-total__text"
              onClick={() => setShowAllItems(!showAllItems)}
            >
              {showAllItems ? "View less" : `and ${cartItems.length - 1} other item(s)`}
            </p>
          </div>
        </div>
        {/**/}
        <div className="confirmation-info-bottom">
          <p className="confirmation-info-bottom__grand-title body-text">
            GRAND TOTAL
          </p>
          <p className="confirmation-info-bottom__grand-amount">
            ${grandTotal}
          </p>
        </div>
        {/**/}
      </div>
      {/**/}
      <Link className="confirmation__btn" to="/">
        <button
          className="confirmation__btn btn-basic-1"
          onClick={() => {
            dispatch(setIsOrderConfirmed("false"));
            dispatch(closeOverlay());
            dispatch(clearCart());
          }}
        >
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
