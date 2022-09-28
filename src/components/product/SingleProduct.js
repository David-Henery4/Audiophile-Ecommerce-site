import React from "react";
import {xx99MK2MobProduct} from "../../assets/product-xx99-mark-two-headphones/mobile";
import {xx99MK2TabProduct} from "../../assets/product-xx99-mark-two-headphones/tablet";
import {xx99MK2DeskProduct} from "../../assets/product-xx99-mark-two-headphones/desktop";

const SingleProduct = ({ id, name, image, price, description }) => {
  // const {mobile, tablet, desktop} = image
  return (
    <div className="single-product">
      <div className="single-product-img-wrap">
        <picture>
          <source srcSet={xx99MK2DeskProduct} media="(min-width: 59.37em)" />
          <source srcSet={xx99MK2TabProduct} media="(min-width: 43.75em)" />
          <img
            className="single-product__image"
            srcSet={xx99MK2MobProduct}
            alt="single-product"
          />
        </picture>
      </div>
      <div className="single-product-content">
        <p className="overline">NEW PRODUCT</p>
        <h2 className="single-product__title">{name && name.toUpperCase()}</h2>
        <p className="body-text">
          {description}
        </p>
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
