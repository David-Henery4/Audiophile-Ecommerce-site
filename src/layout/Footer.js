import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import linkListData from "../link-list-data/linkListData";
import {Logo, Facebook, Instagram, Twitter} from "../assets/svgsComps";
import { Link } from "react-router-dom";

// "p" will be <Link> (temp)

const Footer = () => {
  const [isProductPage, setIsProductPage] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname.includes("/product")) setIsProductPage(true);
    if (!location.pathname.includes("/product")) setIsProductPage(false);
  }, [location.pathname])
  return (
    <footer className="footer" style={{ gridRow: isProductPage && "9/10" }}>
      <div className="footer__line"></div>
      <a className="footer__logo" href="#nav">
        <Logo className="footer__logo" />
      </a>
      <ul className="footer-links sub-title-style">
        {linkListData.map((li) => {
          return (
            <li key={li.id}>
              <Link to={li.path} className="footer-links__link">
                <p>{li.linkTo}</p>
              </Link>
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
