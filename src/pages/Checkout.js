import React from "react";
import { BackBtn } from "../components/product";
import {
  BillingDetails,
  PaymentDetails,
  ShippingInfo,
  Summary,
} from "../components/checkout";

const Checkout = () => {
  return (
    <>
        <BackBtn />
      <main className="checkout">
        <form name="checkout-form" id="checkout-form" className="checkout-form">
          <h3 className="checkout-form__heading">CHECKOUT</h3>
          <BillingDetails />
          <ShippingInfo />
          <PaymentDetails />
        </form>
        <Summary />
      </main>
    </>
  );
};

export default Checkout;
