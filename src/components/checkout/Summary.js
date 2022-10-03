import React from 'react'
import { useSelector } from 'react-redux';

const Summary = () => {
  const { cartItems, cartTotal, shippingFee, grandTotal, vatFee } = useSelector(
    (store) => store.cart
  );
  //
  return (
    <section className="summary">
      <h6 className="summary__title">SUMMARY</h6>
      {/* SUMMARY ITEMS */}
      <div className="summary-items">
        {cartItems.length <= 0 ? (
          <p> You have no items! </p>
        ) : (
          cartItems.map((item) => {
            return (
              <div key={item.id} className="summary-single-item">
                <img
                  className="summary-single-item__image"
                  src={require(`../../assets/${item.cartImage}`)}
                  alt={`${item.nickName}-summary-img`}
                />
                <p className="summary-single-item__name">{item.nickName}</p>
                <p className="summary-single-item__price">${item.price}</p>
                <p className="summary-single-item__quantity">
                  x{item.itemQuantity}
                </p>
              </div>
            );
          })
        )}
      </div>
      {/*************/}
      <div className="summary-details">
        <div className="summary-detail-type">
          <p className="summary-details__name body-text">TOTAL</p>
          <p className="summary-details__amount">${cartTotal}</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name body-text">SHIPPING</p>
          <p className="summary-details__amount">${shippingFee}</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name body-text">VAT (INCLUDED)</p>
          <p className="summary-details__amount">${Math.trunc(vatFee)}</p>
        </div>
        <div className="summary-detail-type">
          <p className="summary-details__name body-text">GRAND TOTAL</p>
          <p className="summary-details__amount summary-grand-total">
            ${grandTotal}
          </p>
        </div>
      </div>
      <button
        type="submit"
        form="checkout-form"
        className="summary__submit-btn btn-basic-1"
        disabled={cartItems.length <= 0}
      >
        CONTINUE & PAY
      </button>
    </section>
  );
};

export default Summary