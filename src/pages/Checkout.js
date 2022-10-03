import React from "react";
import { BackBtn } from "../components/product";
import { useDispatch } from "react-redux";
import { openOverlay, setIsOrderConfirmed } from "../features/cart/cartSlice";
import {
  BillingDetails,
  PaymentDetails,
  ShippingInfo,
  Summary,
  OrderConfirmation
} from "../components/checkout";
import useForm from "../customHooks/useForm";


const Checkout = () => {
  const dispatch = useDispatch()
  //
  const callBackSubmit = () => {
    // callBack to handle submit// passed into the hook
    dispatch(setIsOrderConfirmed("true"));
    dispatch(openOverlay())
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
