import React from "react";
import { Link } from "react-router-dom";


const CategoryProduct = ({name, categoryImage, slug, description, newProduct}) => {
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
            src={require(`../../assets/${mobile}`)}
            srcSet={require(`../../assets/${mobile}`)}
            alt="category-product-preview"
          />
        </picture>
      </div>
      <div className="category-product-content">
        <p className="overline">{newProduct ? "NEW PRODUCT" : " "}</p>
        <h2 className="category-product__title">{name.toUpperCase()}</h2>
        <p className="category-product__text body-text">{description}</p>
        <Link to={`/product/${slug}`}>
          <button className="btn-basic-1">SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryProduct;
