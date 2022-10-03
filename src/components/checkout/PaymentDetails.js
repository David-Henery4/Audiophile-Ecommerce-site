import React, { useState, useEffect } from "react";
import {CashDeliveryIcon} from "../../assets/svgsComps"

const PaymentDetails = ({ handleChange, errors, values }) => {
  const [paymentMethod, setPaymethod] = useState("e-money")
  const [event, setEvent] = useState(null)
  const [checkEMoneyNumber, setCheckEMoneyNumber] = useState(false);
  const [checkEMoneyPin, setCheckEMoneyPin] = useState(false);
  //
  const handleSetRadio = (e) => {
    setPaymethod(e.target.value)
    setEvent(e)
  }
  //
  useEffect(() => {
    if (event) handleChange(event);
  }, [paymentMethod])
  //
  useEffect(() => {
    setCheckEMoneyNumber(errors.eMoneyNumber && values.eMoneyNumber.length >= 1);
    setCheckEMoneyPin(errors.eMoneyPin && values.eMoneyPin.length >= 1);
  }, [errors, values]);
  //
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
                id="e_money"
                name="payment__method"
                checked={paymentMethod === "e-money"}
                onChange={handleSetRadio}
              />
              <label htmlFor="e-money" className="payment-fields-radio__label">
                e-Money
              </label>
            </div>
            <div className="payment-fields-radio">
              <input
                className="payment-fields-radio__input"
                type="radio"
                name="payment__method"
                value="cash-on-delivery"
                id="cash_on_delivery"
                onChange={handleSetRadio}
                checked={paymentMethod === "cash-on-delivery"}
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
          {paymentMethod === "cash-on-delivery" ? (
            <div className="payment-delivery">
              <CashDeliveryIcon className="payment-delivery__icon" />
              <p className="payment-delivery__text body-text">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          ) : (
            <>
              <div className="payment-number input-wrap">
                <label
                  className={
                    checkEMoneyNumber
                      ? "input-wrap__label error-label-color"
                      : "input-wrap__label"
                  }
                  htmlFor="eMoneyNumber"
                >
                  e-Money Number
                </label>
                <input
                  className="payment-number__input input-wrap__input"
                  type="number"
                  name="eMoneyNumber"
                  id="eMoneyNumber"
                  placeholder="238521993"
                  onChange={handleChange}
                  required
                />
                {checkEMoneyNumber && (
                  <span className="error-label-color error-input-pos">
                    {errors.eMoneyNumber}
                  </span>
                )}
              </div>
              <div className="payment-number input-wrap">
                <label
                  className={
                    checkEMoneyPin
                      ? "input-wrap__label error-label-color"
                      : "input-wrap__label"
                  }
                  htmlFor="eMoneyPin"
                >
                  e-money PIN
                </label>
                <input
                  className="payment-number__input input-wrap__input"
                  type="number"
                  name="eMoneyPin"
                  id="eMoneyPin"
                  placeholder="6891"
                  onChange={handleChange}
                  required
                />
                {checkEMoneyPin && (
                  <span className="error-label-color error-input-pos">
                    {errors.eMoneyPin}
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </fieldset>
    </section>
  );
};

export default PaymentDetails;
