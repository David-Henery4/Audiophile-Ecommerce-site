import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../assets/svgsComps";
import headPhones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earPhones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

const CategoryList = ({ isProductPage = false }) => {

  return (
    <div className="categories" style={{ gridRow: isProductPage && "7/8" }}>
      <div className="categories-box">
        <div className="categories-box-underlay"></div>
        <img
          className="categories-box__image"
          src={headPhones}
          alt="headphones"
        />
        <p className="categories-box__name">HEADPHONES</p>
        <Link className="categories-box-btn" to="/category/headphones">
          <p className="categories-box-btn__text">SHOP</p>
          <ArrowRight className="categories-box-btn__icon" />
        </Link>
      </div>
      <div className="categories-box">
        <div className="categories-box-underlay"></div>
        <img className="categories-box__image" src={speakers} alt="speakers" />
        <p className="categories-box__name">SPEAKERS</p>
        <Link className="categories-box-btn" to="/category/speakers">
          <p className="categories-box-btn__text">SHOP</p>
          <ArrowRight className="categories-box-btn__icon" />
        </Link>
      </div>
      <div className="categories-box">
        <div className="categories-box-underlay"></div>
        <img
          className="categories-box__image"
          src={earPhones}
          alt="earphones"
        />
        <p className="categories-box__name">EARPHONES</p>
        <Link
          className="categories-box-btn"
          to="/category/earphones"
        >
          <p className="categories-box-btn__text">SHOP</p>
          <ArrowRight className="categories-box-btn__icon" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
