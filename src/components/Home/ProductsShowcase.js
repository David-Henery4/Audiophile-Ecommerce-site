import React from "react";
import { Link } from "react-router-dom";
import { Product1Img, Product2Img, Product3Img } from "../../assets/home/mobile";
import {Product1ImgDesk, Product2ImgDesk, Product3ImgDesk} from "../../assets/home/desktop";
import {ShowcaseImg2Tab, ShowcaseImg1Tab, ShowcaseImg3Tab} from "../../assets/home/tablet";
import CirclesImg from "../../assets/home/desktop/circles.svg"



const ProductsShowcase = () => {
  return (
    <section className="products">
      {/* SHOWCASE ONE */}
      <div className="products-box products-box-1">
        <div className="products-box-1__picture">
          <picture>
            <source srcSet={Product1ImgDesk} media="(min-width:59.37em)" />
            <source srcSet={ShowcaseImg1Tab} media="(min-width:43.75em)" />
            <img
              className="products-box-1__image"
              src={Product1Img}
              srcSet={Product1Img}
              alt="speaker-product"
            />
          </picture>
          <img
            className="products-box-1__pattern"
            src={CirclesImg}
            alt="circles-pattern"
          />
        </div>
        <div className="products-box-1__text-wrap">
          <h2 className="products-box-1__title">
            <span>Zx9</span>
            speaker
          </h2>
          <p className="products-box-1__text body-text">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound. See product
          </p>
          <Link
            className="products-box-1__btn btn-basic-3"
            to="/product/zx9-speaker"
          >
            <p>SEE PRODUCT</p>
          </Link>
        </div>
      </div>
      {/*SHOWCASE TWO*/}
      <div className="products-box products-box-2">
        <picture>
          <source srcSet={Product2ImgDesk} media="(min-width:59.37em)" />
          <source srcSet={ShowcaseImg2Tab} media="(min-width:43.75em)" />
          <img
            className="products-box-2__image"
            src={Product2Img}
            srcSet={Product2Img}
            alt="speaker-product-2"
          />
        </picture>
        <h3 className="products-box-2__title">ZX7 speaker</h3>
        <Link
          className="products-box-2__btn btn-basic-2"
          to="/product/zx7-speaker"
        >
          <p>SEE PRODUCT</p>
        </Link>
      </div>
      {/*SHOWCASE THREE*/}
      <div className="products-box products-box-3">
        <div className="products-box-3-side-1">
          <picture>
            <source srcSet={Product3ImgDesk} media="(min-width:59.37em)" />
            <source srcSet={ShowcaseImg3Tab} media="(min-width:43.75em)" />
            <img
              className="products-box-3__image"
              src={Product3Img}
              srcSet={Product3Img}
              alt="earphones-product"
            />
          </picture>
        </div>
        <div className="products-box-3-side-2">
          <h4 className="products-box-3__title">YX1 earphones</h4>
          <Link
            className="products-box-3__btn btn-basic-2"
            to="/product/yx1-earphones"
          >
            <p>SEE PRODUCT</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
