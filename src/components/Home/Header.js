import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";
import headerImage from "../../assets/home/mobile/image-header.jpg"
import headerImgTab from "../../assets/home/tablet/image-header.jpg";
import {headerHeroDesk} from "../../assets/home/desktop"

const Header = () => {
  const [headerProductSlug,setHeaderProductSlug] = useState("")
  const {mainStoreData} = useSelector((store) => store.store)
  
  useEffect(() => {
    const prod = mainStoreData.find((prod) => {
      return prod.name === "XX99 Mark II Headphones"
    })
    setHeaderProductSlug(prod.slug)
  }, [mainStoreData])
  return (
    <header className="header">
      <picture className="header__picture">
        <source srcSet={headerHeroDesk} media="(min-width:59.37em)" />
        <source srcSet={headerImgTab} media="(min-width:34.68em)" />
        <img
          className="header__image"
          src={headerImage}
          srcSet={headerImage}
          alt="headerphones-header"
        />
      </picture>
      <p className="header__tag overline">NEW PRODUCT</p>
      <h1 className="header__title">
        <span>XX99 Mark II </span>
        Headphones
      </h1>
      <p className="header__desc body-text">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link
        className="header__btn btn-basic-1"
        to={`/product/${headerProductSlug}`}
      >
        <p>SEE PRODUCT</p>
      </Link>
    </header>
  );
};

export default Header;
