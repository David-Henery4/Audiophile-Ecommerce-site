import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {xx99MK2MobProduct} from "../../assets/product-xx99-mark-two-headphones/mobile";
import {xx99MK2TabProduct} from "../../assets/product-xx99-mark-two-headphones/tablet";
import {xx99MK2DeskProduct} from "../../assets/product-xx99-mark-two-headphones/desktop";
import { useState } from "react";

const SingleProduct = ({ id, name, image, price, description }) => {
  const [itemQuantity, setItemQuantity] = useState(1)
  const dispatch = useDispatch()
  const { mainStoreData } = useSelector((store) => store.store);
  //
  const handleAddItemToCart = (itemId) => {
    const foundItem = mainStoreData.find((item) => item.id === itemId)
    // sort nicknames & cart images into the native JSON! 
    // work out VAT % (20% OF TOTAL PRICE)
    // (also change "new" key to "newProduct" key in JSON)
    const {id, price} = foundItem;
    const itemToAdd = {
      id,
      price,
      itemQuantity,
      shipping: 50,
      totalPrice: price * itemQuantity,

    }
  }
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
        <p className="overline">NEW PRODUCT</p>
        <h2 className="single-product__title">{name && name.toUpperCase()}</h2>
        <p className="body-text">{description}</p>
        <p className="single-product__price">{price}</p>
        <div className="single-product__btn-quantity-wrap">
          <div className="single-product__quantity">
            <i className="single-product__quantity--minus">-</i>
            <p className="single-product__quantity--amount">1</p>
            <i className="single-product__quantity--plus">+</i>
          </div>
          <button className="btn-basic-1">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
