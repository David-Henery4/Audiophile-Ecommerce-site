import React from 'react'
import {xx59, xx99MK2, yx1} from "../../assets/cart"

const Summary = () => {
  //
  // will be using:       
  // shipping: 50,
  // vatTotal : (20/100) * (price * itemQuantity),
  //
  return (
    <section className="summary">
      <h6 className="summary__title">SUMMARY</h6>
      <div className="summary-items">
        <div className="summary-single-item">
          <img
            className="summary-single-item__image"
            src={xx99MK2}
            alt="item"
          />
          <p className="summary-single-item__name">xx99 MK II</p>
          <p className="summary-single-item__price">$2,999</p>
          <p className="summary-single-item__quantity">x1</p>
        </div>
        <div className="summary-single-item">
          <img className="summary-single-item__image" src={xx59} alt="item" />
          <p className="summary-single-item__name">xx99 MK II</p>
          <p className="summary-single-item__price">$2,999</p>
          <p className="summary-single-item__quantity">x1</p>
        </div>
        <div className="summary-single-item">
          <img className="summary-single-item__image" src={yx1} alt="item" />
          <p className="summary-single-item__name">xx99 MK II</p>
          <p className="summary-single-item__price">$2,999</p>
          <p className="summary-single-item__quantity">x1</p>
        </div>
      </div>
      <div className="summary-details">
        <div className="summary-detail-type">
          <p className="summary-details__name body-text">TOTAL</p>
          <p className="summary-details__amount">$5,396</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name body-text">SHIPPING</p>
          <p className="summary-details__amount">$50</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name body-text">VAT (INCLUDED)</p>
          <p className="summary-details__amount">$1,079</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name body-text summary-grand-total">
            GRAND TOTAL
          </p>
          <p className="summary-details__amount summary-grand-total">$5,446</p>
        </div>
      </div>
      <button className="summary__submit-btn">CONTINUE & PAY</button>
    </section>
  );
}

export default Summary