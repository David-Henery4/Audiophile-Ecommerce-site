import React from 'react'

const PaymentDetails = () => {
  return (
    <section className="payment">
      <fieldset className="payment-fields">
        <legend className="payment-fields__title">Payment Details</legend>
        <div>
          <label htmlFor="">Payment Method</label>
          <input type="radio" value="e-money" />
          <input type="radio" value="Cash on Dilvery" />
        </div>
        <div>
          <label htmlFor="">e-Money Number</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">e-money PIN</label>
          <input type="text" />
        </div>
      </fieldset>
    </section>
  );
}

export default PaymentDetails