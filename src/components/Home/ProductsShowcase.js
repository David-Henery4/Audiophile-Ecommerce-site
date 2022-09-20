import React from "react";
import { Product1Img, Product2Img, Product3Img } from "../../assets/home/mobile";
import {ProductPattern} from "../../assets/home/desktop";

const ProductsShowcase = () => {
  return (
    <section className="products">
      <div className="products-box-1">
        <img src={ProductPattern} alt="circles-pattern" />
        <img className="products-box-1__image" src={Product1Img} alt="speaker-product" />
        <h1 className="products-box-1__title">ZX9 speaker</h1>
        <p className="products-box-1__text">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound. See product
        </p>
        <button className="products-box-1__btn">SEE PRODUCT</button>
      </div>
      {/**/}
      <div className="products-box-2">
        <img className="products-box-2__image" src={Product2Img} alt="speaker-product-2" />
        <h4 className="products-box-2__title">ZX7 speaker</h4>
        <button className="products-box-2__btn">SEE PRODUCT</button>
      </div>
      {/**/}
      <div className="products-box-3">
        <div className="products-box-3-side-1">
          <img
            className="products-box-3__image"
            src={Product3Img}
            alt="earphones-product"
          />
        </div>
        <div className="products-box-3-side-2">
          <h4 className="products-box-3__title">YX1 earphones</h4>
          <button className="products-box-3__btn">SEE PRODUCT</button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
