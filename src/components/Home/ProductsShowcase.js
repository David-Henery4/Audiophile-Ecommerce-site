import React from "react";
import { Product1Img, Product2Img, Product3Img } from "../../assets/home/mobile";
import {ProductPattern} from "../../assets/home/desktop";

const ProductsShowcase = () => {
  return (
    <section className="products">
      <div className="products-box products-box-1">
        <ProductPattern className="products-box-1__pattern" />
        <img
          className="products-box-1__image"
          src={Product1Img}
          alt="speaker-product"
        />
        <h1 className="products-box-1__title">
          <span>Zx9</span>
          speaker
        </h1>
        <p className="products-box-1__text body-text">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound. See product
        </p>
        <button className="products-box-1__btn btn-basic-3">SEE PRODUCT</button>
      </div>
      {/**/}
      <div className="products-box products-box-2">
        <img
          className="products-box-2__image"
          src={Product2Img}
          alt="speaker-product-2"
        />
        <h4 className="products-box-2__title h4-style">ZX7 speaker</h4>
        <button className="products-box-2__btn btn-basic-2">SEE PRODUCT</button>
      </div>
      {/**/}
      <div className="products-box products-box-3">
        <div className="products-box-3-side-1">
          <img
            className="products-box-3__image"
            src={Product3Img}
            alt="earphones-product"
          />
        </div>
        <div className="products-box-3-side-2">
          <h4 className="products-box-3__title h4-style">YX1 earphones</h4>
          <button className="products-box-3__btn btn-basic-2">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
