import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import linkListData from "../link-list-data/linkListData";
import {Logo, Facebook, Instagram, Twitter} from "../assets/svgsComps";

// "p" will be <Link> (temp)

const Footer = () => {
  const [isProductPage, setIsProductPage] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname.includes("/product")) setIsProductPage(true);
    if (!location.pathname.includes("/product")) setIsProductPage(false);
  }, [location.pathname])
  return (
    <footer className="footer" style={{gridRow: isProductPage && "9/10"}}>
      <div className="footer__line"></div>
      <Logo className="footer__logo" />
      <ul className="footer-links sub-title-style">
        {linkListData.map((li) => {
          return (
            <li key={li.id} className="footer-links__link">
              <p>{li.linkTo}</p>
            </li>
          );
        })}
      </ul>
      <p className="footer__desc body-text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="footer__copyright body-text">
        Copyright 2022. All Rights Reserved
      </p>
      <div className="footer-socials">
        <Facebook className="footer-socials__icon" />
        <Twitter className="footer-socials__icon" />
        <Instagram className="footer-socials__icon" />
      </div>
    </footer>
  );
};

export default Footer;
