import React from "react";
import headerImage from "../../assets/home/mobile/image-header.jpg"

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__image"
        src={headerImage}
        alt="headerphones-header"
      />
      <p className="header__tag overline">NEW PRODUCT</p>
      <h1 className="header__title h1-style">XX99 Mark II Headphones</h1>
      <p className="header__desc body-text">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className="header__btn btn-basic-1">SEE PRODUCT</button>
    </header>
  );
};

export default Header;
