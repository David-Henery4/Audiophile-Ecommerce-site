import React from "react";

const PaymentDetails = () => {
  return (
    <section className="payment">
      <fieldset className="payment-fields">
        <legend className="payment-fields__title sub-title-style">
          Payment Details
        </legend>
        <div className="payment-fields-radio-wrap">
          <h6 className="payment-fields__heading">Payment Method</h6>
          <div className="payment-fields-radio-options">
            <div className="payment-fields-radio">
              <input
                className="payment-fields-radio__input"
                type="radio"
                value="e-money"
                id="e-money"
                name="payment__method"
                defaultChecked
              />
              <label htmlFor="e-money" className="payment-fields-radio__label">
                e-Money
              </label>
            </div>
            <div className="payment-fields-radio">
              <input
                className="payment-fields-radio__input"
                type="radio"
                value="cash-on-dilivery"
                name="payment__method"
                id="cash-on-delivery"
              />
              <label
                htmlFor="cash-on-delivery"
                className="payment-fields-radio__label"
              >
                cash-on-delivery
              </label>
            </div>
          </div>
        </div>
        <div className="payment-numbers-wrap">
          <div className="payment-number input-wrap">
            <label
              className="payment-number__label input-wrap__label"
              htmlFor="e-money-number"
            >
              e-Money Number
            </label>
            <input
              className="payment-number__input input-wrap__input"
              type="text"
              name="e-money-number"
              id="e-money-number"
              placeholder="238521993"
            />
          </div>
          <div className="payment-number input-wrap">
            <label
              className="payment-number__label input-wrap__label"
              htmlFor="e-money-pin"
            >
              e-money PIN
            </label>
            <input
              className="payment-number__input input-wrap__input"
              type="text"
              name="e-money-pin"
              id="e-money-pin"
              placeholder="6891"
            />
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default PaymentDetails;
