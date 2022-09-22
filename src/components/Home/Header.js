import React from "react";
import headerImage from "../../assets/home/mobile/image-header.jpg"
import headerImgTab from "../../assets/home/tablet/image-header.jpg";

const Header = () => {
  return (
    <header className="header">
      <picture className="header__picture">
        <source srcSet={headerImgTab} media="(min-width:34.68em)"/>
      <img
        className="header__image"
        srcSet={headerImage}
        alt="headerphones-header"
      />
      </picture>
      <p className="header__tag overline">NEW PRODUCT</p>
      <h1 className="header__title h1-style">
        <span>XX99 Mark II </span> 
        Headphones</h1>
      <p className="header__desc body-text">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className="header__btn btn-basic-1">SEE PRODUCT</button>
    </header>
  );
};

export default Header;
