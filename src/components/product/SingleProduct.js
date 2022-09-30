import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import {addToCart} from "../../features/cart/cartSlice";
import { xx99MK2MobProduct } from "../../assets/product-xx99-mark-two-headphones/mobile";
import { xx99MK2TabProduct } from "../../assets/product-xx99-mark-two-headphones/tablet";
import { xx99MK2DeskProduct } from "../../assets/product-xx99-mark-two-headphones/desktop";
import { useState } from "react";

const SingleProduct = ({ id, name, image, price, description, newProduct }) => {
  let location = useLocation()
  const [itemQuantity, setItemQuantity] = useState(1);
  const dispatch = useDispatch();
  const { mainStoreData } = useSelector((store) => store.store);
  //
  const handleQuantityChange = (change) => {
    if (change === "inc"){
      setItemQuantity(itemQuantity + 1);
    }
    if (change === "dec"){
      setItemQuantity(itemQuantity - 1)
      if (itemQuantity <= 1){
        setItemQuantity(1)
      }
    }
  }
  //
  const handleAddItemToCart = (itemId) => {
    const foundItem = mainStoreData.find((item) => item.id === itemId);
    // work out VAT % (20% OF TOTAL PRICE)
    const { id, price, nickName, cartImage } = foundItem;
    const itemToAdd = {
      id,
      price,
      itemQuantity,
      totalPrice: price * itemQuantity,
      nickName,
      cartImage,
    };
    dispatch(addToCart(itemToAdd))
  };
  //
    useEffect(() => {
      setItemQuantity(1)
    },[location.pathname])
  //
  return (
    <div className="single-product">
      <div className="single-product-img-wrap">
        <picture>
          <source
            srcSet={image && require(`../../assets/${image.desktop}`)}
            media="(min-width: 59.37em)"
          />
          <source
            srcSet={image && require(`../../assets/${image.tablet}`)}
            media="(min-width: 43.75em)"
          />
          <img
            className="single-product__image"
            srcSet={image && require(`../../assets/${image.mobile}`)}
            alt="single-product"
          />
        </picture>
      </div>
      <div className="single-product-content">
        <p className="overline">{newProduct ? "NEW PRODUCT" : " "}</p>
        <h2 className="single-product__title">{name && name.toUpperCase()}</h2>
        <p className="body-text">{description}</p>
        <p className="single-product__price">${price}</p>
        <div className="single-product__btn-quantity-wrap">
          <div className="single-product__quantity">
            <i
              className="single-product__quantity--minus"
              onClick={() => handleQuantityChange("dec")}
            >
              -
            </i>
            <p className="single-product__quantity--amount">{itemQuantity}</p>
            <i
              className="single-product__quantity--plus"
              onClick={() => handleQuantityChange("inc")}
            >
              +
            </i>
          </div>
          <button className="btn-basic-1" onClick={() => handleAddItemToCart(id)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
