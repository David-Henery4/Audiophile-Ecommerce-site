import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getActiveHeaderProduct} from "../../features/store/storeSlice";
import headerImage from "../../assets/home/mobile/image-header.jpg"
import headerImgTab from "../../assets/home/tablet/image-header.jpg";
import {headerHeroDesk} from "../../assets/home/desktop"

const Header = () => {
  const [headerProductId,setHeaderProductId] = useState(0)
  const {mainStoreData} = useSelector((store) => store.store)
  
  useEffect(() => {
    const prod = mainStoreData.find((prod) => {
      return prod.name === "XX99 Mark II Headphones"
    })
    setHeaderProductId(prod.id)
  }, [mainStoreData])
  return (
    <header className="header">
      <picture className="header__picture">
        <source srcSet={headerHeroDesk} media="(min-width:59.37em)" />
        <source srcSet={headerImgTab} media="(min-width:34.68em)" />
        <img
          className="header__image"
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
      <Link className="header__btn" to={`/product/${headerProductId}`}>
        <button className="btn-basic-1">SEE PRODUCT</button>
      </Link>
    </header>
  );
};

export default Header;
