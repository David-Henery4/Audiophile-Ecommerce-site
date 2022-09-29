import React from "react";
import { Link } from "react-router-dom";
import {xx99MK2MobPreview} from "../../assets/product-xx99-mark-two-headphones/mobile";
import {xx99MK2TabPreview} from "../../assets/product-xx99-mark-two-headphones/tablet";
import {xx99MK2DeskPreview} from "../../assets/product-xx99-mark-two-headphones/desktop";


const CategoryProduct = ({name, categoryImage, slug, description}) => {
  const {mobile,desktop,tablet} = categoryImage
  return (
    <div className="category-product">
      <div className="category-product-image">
        <picture>
          <source
            srcSet={require(`../../assets/${desktop}`)}
            media="(min-width: 59.37em)"
          />
          <source
            srcSet={require(`../../assets/${tablet}`)}
            media="(min-width: 28.12em)"
          />
          <img
            className="category-product-image__img"
            srcSet={require(`../../assets/${mobile}`)}
            alt="category-product-preview"
          />
        </picture>
      </div>
      <div className="category-product-content">
        <p className="overline">NEW PRODUCT</p>
        <h2 className="category-product__title">{name}</h2>
        <p className="category-product__text body-text">{description}</p>
        <Link to={`/product/${slug}`}>
          <button className="btn-basic-1">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryProduct;
