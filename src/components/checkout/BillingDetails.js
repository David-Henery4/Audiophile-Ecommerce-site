import React from "react";

const BillingDetails = () => {
  return (
    <section className="billing">
      <fieldset className="billing-fields">
        <legend className="billing-fields__title sub-title-style">
          Billing Details
        </legend>
        <div className="billing-fields__name input-wrap">
          <label className="input-wrap__label" htmlFor="name">
            Name
          </label>
          <input
            className="input-wrap__input"
            type="text"
            id="name"
            name="name"
            placeholder="Alexi Ward"
          />
        </div>
        <div className="billing-fields__email input-wrap">
          <label htmlFor="email" className="input-wrap__label">
            Email Address
          </label>
          <input
            className="input-wrap__input"
            type="text"
            id="email"
            name="email"
            placeholder=""
          />
        </div>
        <div className="billing-fields__phone-num input-wrap">
          <label htmlFor="phone" className="input-wrap__label">
            Phone Number
          </label>
          <input
            className="input-wrap__input"
            type="text"
            id="phone"
            name="phone"
          />
        </div>
      </fieldset>
    </section>
  );
};

export default BillingDetails;
