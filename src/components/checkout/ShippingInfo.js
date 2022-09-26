import React from 'react'

const ShippingInfo = () => {
  return (
    <section className="shipping">
      <fieldset className="shipping-fields">
        <legend className="shipping-fields__title sub-title-style">
          Shipping Info
        </legend>
        <div className="shipping-fields__address input-wrap">
          <label htmlFor="" className="input-wrap__label">
            Your Address
          </label>
          <input type="text" className="input-wrap__input" />
        </div>
        <div className="shipping-fields__zip input-wrap">
          <label htmlFor="" className="input-wrap__label">
            ZIP Code
          </label>
          <input type="text" className="input-wrap__input" />
        </div>
        <div className="shipping-fields__city input-wrap">
          <label htmlFor="" className="input-wrap__label">
            CITY
          </label>
          <input type="text" className="input-wrap__input" />
        </div>
        <div className="shipping-fields__country input-wrap">
          <label htmlFor="" className="input-wrap__label">
            COUNTRY
          </label>
          <input type="text" className="input-wrap__input" />
        </div>
      </fieldset>
    </section>
  );
}

export default ShippingInfo