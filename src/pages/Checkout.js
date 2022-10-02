import React from "react";
import { BackBtn } from "../components/product";
import {
  BillingDetails,
  PaymentDetails,
  ShippingInfo,
  Summary,
  OrderConfirmation
} from "../components/checkout";
import { useState } from "react";
import useForm from "../customHooks/useForm";

const Checkout = () => {
  //
  const callBackSubmit = () => {
    // callBack to handle submit// passed into the hook
    console.log(values)
  }
  // custom hook
  const {handleChange, values, errors, handleSubmit} = useForm(callBackSubmit)
  //
  return (
    <>
      <OrderConfirmation />
      <BackBtn />
      <main className="checkout">
        <form name="checkout-form" id="checkout-form" className="checkout-form" onSubmit={handleSubmit}>
          <h3 className="checkout-form__heading">CHECKOUT</h3>
          <BillingDetails
            handleChange={handleChange}
            errors={errors}
            values={values}
          />
          <ShippingInfo
            handleChange={handleChange}
            errors={errors}
            values={values}
          />
          <PaymentDetails
            handleChange={handleChange}
            errors={errors}
            values={values}
          />
        </form>
        <Summary />
      </main>
    </>
  );
};

export default Checkout;
