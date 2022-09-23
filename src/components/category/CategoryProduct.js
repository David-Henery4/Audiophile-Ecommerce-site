import React from "react";
import {xx99MK2MobPreview} from "../../assets/product-xx99-mark-two-headphones/mobile";
import {xx99MK2TabPreview} from "../../assets/product-xx99-mark-two-headphones/tablet";
import {xx99MK2DeskPreview} from "../../assets/product-xx99-mark-two-headphones/desktop";


const CategoryProduct = () => {
  return (
    <div className="category-product">
      <div className="category-product-image">
        <picture>
          <source srcSet={xx99MK2DeskPreview} media="(min-width: 59.37em)" />
          <source srcSet={xx99MK2TabPreview} media="(min-width: 28.12em)" />
          <img
            className="category-product-image__img"
            srcSet={xx99MK2MobPreview}
            alt="category-product-preview"
          />
        </picture>
      </div>
      <div className="category-product-content">
        <p className="overline">NEW PRODUCT</p>
        <h2 className="category-product__title">XX99 MARK II HEADPHONES</h2>
        <p className="category-product__text body-text">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="btn-basic-1">SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default CategoryProduct;
