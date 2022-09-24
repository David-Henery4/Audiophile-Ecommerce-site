import React from "react";
import AboutImgMob from "../../assets/shared/mobile/image-best-gear.jpg";
import AboutImgTab from "../../assets/shared/tablet/image-best-gear.jpg";
import AboutImgDesk from "../../assets/shared/desktop/image-best-gear.jpg";

const About = ({ isProductPage = false }) => {
  return (
    <section className="about" style={{gridRow: isProductPage && "7/8"}}>
      <picture className="about__picture">
        <source srcSet={AboutImgDesk} media="(min-width:59.37em)" />
        <source srcSet={AboutImgTab} media="(min-width:43.75em)" />
        <img
          className="about__image"
          srcSet={AboutImgMob}
          alt="about-best-gear"
        />
      </picture>
      <div className="about-text-wrap">
        <h2 className="about__title">
          Bringing you the
          <span> best </span>
          audio gear
        </h2>
        <article className="about__desc body-text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </article>
      </div>
    </section>
  );
};

export default About;
