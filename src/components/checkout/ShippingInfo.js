import React from 'react'
import { useState, useEffect } from 'react';

const ShippingInfo = ({ handleChange, errors, values }) => {
  const [checkAddress, setCheckAddress] = useState(false);
  const [checkZipCode, setCheckZipCode] = useState(false);
  const [checkCity, setCheckCity] = useState(false);
  const [checkCountry, setCheckCountry] = useState(false);
  //
    useEffect(() => {
      setCheckAddress(errors.address && values.address.length >= 1);
      setCheckZipCode(errors.zipCode && values.zipCode.length >= 1);
      setCheckCity(errors.city && values.city.length >= 1);
      setCheckCountry(errors.country && values.country.length >= 1);
    }, [errors, values]);
  //
  return (
    <section className="shipping">
      <fieldset className="shipping-fields">
        <legend className="shipping-fields__title sub-title-style">
          Shipping Info
        </legend>
        <div className="shipping-fields__address input-wrap">
          <label
            htmlFor="address"
            className={
              checkAddress
                ? "input-wrap__label error-label-color"
                : "input-wrap__label"
            }
          >
            Your Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className={
              checkAddress
                ? "input-wrap__input error-input-border"
                : "input-wrap__input"
            }
            placeholder="1137 Williams Avenue"
            onChange={handleChange}
            required
          />
          {checkAddress && (
            <span className="error-label-color error-input-pos error-label-text">
              {errors.address}
            </span>
          )}
        </div>
        <div className="shipping-fields__zip input-wrap">
          <label
            htmlFor="zipCode"
            className={
              checkZipCode
                ? "input-wrap__label error-label-color"
                : "input-wrap__label"
            }
          >
            ZIP Code
          </label>
          <input
            type="number"
            name="zipCode"
            id="zipCode"
            className={
              checkZipCode
                ? "input-wrap__input error-input-border"
                : "input-wrap__input"
            }
            placeholder="10001"
            onChange={handleChange}
            required
          />
          {checkZipCode && (
            <span className="error-label-color error-input-pos error-label-text">
              {errors.zipCode}
            </span>
          )}
        </div>
        <div className="shipping-fields__city input-wrap">
          <label
            htmlFor="city"
            className={
              checkCity
                ? "input-wrap__label error-label-color"
                : "input-wrap__label"
            }
          >
            CITY
          </label>
          <input
            name="city"
            id="city"
            type="text"
            className={
              checkCity
                ? "input-wrap__input error-input-border"
                : "input-wrap__input"
            }
            placeholder="new york"
            onChange={handleChange}
            required
          />
          {checkCity && (
            <span className="error-label-color error-input-pos error-label-text">
              {errors.city}
            </span>
          )}
        </div>
        <div className="shipping-fields__country input-wrap">
          <label
            htmlFor="country"
            className={
              checkCountry
                ? "input-wrap__label error-label-color"
                : "input-wrap__label"
            }
          >
            COUNTRY
          </label>
          <input
            name="country"
            id="country"
            type="text"
            className={
              checkCountry
                ? "input-wrap__input error-input-border"
                : "input-wrap__input"
            }
            placeholder="United States"
            onChange={handleChange}
            required
          />
          {checkCountry && (
            <span className="error-label-color error-input-pos error-label-text">
              {errors.country}
            </span>
          )}
        </div>
      </fieldset>
    </section>
  );
};

export default ShippingInfo