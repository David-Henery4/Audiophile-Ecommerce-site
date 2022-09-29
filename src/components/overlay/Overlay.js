import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toggleCart, toggleOverlay} from "../../features/cart/cartSlice";

const Overlay = () => {
  const dispatch = useDispatch()
  const { isOverlayActive } = useSelector((store) => store.cart);
  const handleOverlayClick = () => {
    dispatch(toggleCart())
    dispatch(toggleOverlay())
  }
  return (
    <div className={isOverlayActive ? "overlay overlay-active" : "overlay"} onClick={handleOverlayClick}></div>
  )
}

export default Overlay