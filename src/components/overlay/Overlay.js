import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toggleCart, toggleOverlay, closeOverlay, closeCart} from "../../features/cart/cartSlice";
import {closeDropDownNav} from "../../features/store/storeSlice";

const Overlay = () => {
  const dispatch = useDispatch()
  const { isOverlayActive } = useSelector((store) => store.cart);
  const handleOverlayClick = () => {
    dispatch(closeCart())
    dispatch(closeOverlay())
    dispatch(closeDropDownNav())
  }
  return (
    <div className={isOverlayActive ? "overlay overlay-active" : "overlay"} onClick={handleOverlayClick}></div>
  )
}

export default Overlay