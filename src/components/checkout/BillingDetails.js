import React, { useEffect, useState } from "react";


const BillingDetails = ({ handleChange, errors, values }) => {
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);
  //
  useEffect(() => {
    setCheckName(errors.name && values.name.length >= 1);
    setCheckEmail(errors.email && values.email.length >= 1);
    setCheckPhone(errors.phone && values.phone.length >= 1);
  }, [errors, values]);
  //
  return (
    <section className="billing">
      <fieldset className="billing-fields">
        <legend className="billing-fields__title sub-title-style">
          Billing Details
        </legend>
        <div className="billing-fields__name input-wrap">
          <label
            className={
              checkName
                ? "input-wrap__label error-label-color"
                : "input-wrap__label"
            }
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={
              checkName
                ? "input-wrap__input error-input-border"
                : "input-wrap__input"
            }
            type="text"
            id="name"
            name="name"
            placeholder="Alexi Ward"
            onChange={handleChange}
            required
          />
          {checkName && (
            <span className="error-label-color error-input-pos error-label-text">
              {errors.name}
            </span>
          )}
        </div>
        <div className="billing-fields__email input-wrap">
          <label
            htmlFor="email"
            className={
              checkEmail
                ? "input-wrap__label error-label-color"
                : "input-wrap__label"
            }
          >
            Email Address
          </label>
          <input
            className={
              checkEmail
                ? "input-wrap__input error-input-border"
                : "input-wrap__input"
            }
            type="email"
            id="email"
            name="email"
            placeholder="alexei@mail.com"
            onChange={handleChange}
            required
          />
          {checkEmail && (
            <span className="error-label-color error-input-pos error-label-text">
              {errors.email}
            </span>
          )}
        </div>
        <div className="billing-fields__phone-num input-wrap">
          <label
            htmlFor="phone"
            className={
              checkPhone
                ? "input-wrap__label error-label-color"
                : "input-wrap__label"
            }
          >
            Phone Number
          </label>
          <input
            className={
              checkPhone
                ? "input-wrap__input error-input-border"
                : "input-wrap__input"
            }
            type="number"
            id="phone"
            name="phone"
            placeholder="+1 202-555-0136"
            onChange={handleChange}
            required
          />
          {checkPhone && (
            <span className="error-label-color error-input-pos error-label-text">
              {errors.phone}
            </span>
          )}
        </div>
      </fieldset>
    </section>
  );
};

export default BillingDetails;
