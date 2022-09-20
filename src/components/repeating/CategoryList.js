import React from "react";
import { ArrowRight } from "../../assets/svgsComps";
import headPhones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earPhones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

const CategoryList = () => {
  return (
    <div className="categories">
      <div className="categories-box">
        <img className="categories-box__image" src={headPhones} alt="headphones" />
        <p className="categories__name">HEADPHONES</p>
        <div className="categories-btn">
          <p className="categories-btn__text">SHOP</p>
          <ArrowRight className="categories-btn__icon" />
        </div>
      </div>
      <div className="categories-box">
        <img className="categories-box__image" src={speakers} alt="speakers" />
        <p className="categories__name">SPEAKERS</p>
        <div className="categories-btn">
          <p className="categories-btn__text">SHOP</p>
          <ArrowRight className="categories-btn__icon" />
        </div>
      </div>
      <div className="categories-box">
        <img className="categories-box__image" src={earPhones} alt="earphones" />
        <p className="categories__name">EARPHONES</p>
        <div className="categories-btn">
          <p className="categories-btn__text">SHOP</p>
          <ArrowRight className="categories-btn__icon" />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
