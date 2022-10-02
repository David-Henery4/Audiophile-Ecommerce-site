import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {setIsOrderConfirmed, closeOverlay, clearCart} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom"; 
import { ConfirmedOrderIcon } from "../../assets/svgsComps";
// might have as image
import {xx99MK2} from "../../assets/cart";

const OrderConfirmation = () => {
  const dispatch = useDispatch()
  const { isOrderConfirmed } = useSelector((store) => store.cart);
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
            <div className="confirmation-items-item">
              <img
                className="confirmation-items-item__image"
                src={xx99MK2}
                alt="item"
              />
              <p className="confirmation-items-item__name">xx99 MK II</p>
              <p className="confirmation-items-item__price">$2,999</p>
              <p className="confirmation-items-item__quantity">x1</p>
            </div>
          </div>
          <div className="confirmation-items-total">
            <p className="confirmation-items-total__text">
              and 2 other item(s)
            </p>
          </div>
        </div>
        {/**/}
        <div className="confirmation-info-bottom">
          <p className="confirmation-info-bottom__grand-title body-text">
            GRAND TOTAL
          </p>
          <p className="confirmation-info-bottom__grand-amount">$5,446</p>
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
            dispatch(clearCart())
          }}
        >
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
