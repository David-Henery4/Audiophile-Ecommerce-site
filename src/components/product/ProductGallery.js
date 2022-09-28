import React from 'react'
import {galleryImgOneMob, galleryImgThreeMob, galleryImgTwoMob} from "../../assets/product-xx99-mark-two-headphones/mobile";
import {galleryImgOneTab, galleryImgTwoTab,galleryImgThreeTab} from "../../assets/product-xx99-mark-two-headphones/tablet";
import {galleryImgOneDesk, galleryImgTwoDesk, galleryImgThreeDesk} from "../../assets/product-xx99-mark-two-headphones/desktop";
import { useEffect, useState } from 'react';

const ProductGallery = ({gallery}) => {
  const [firstImg, setFirstImg] = useState(null)
  const [secondImg, setSecondImg] = useState(null)
  const [thirdImg, setThirdImg] = useState(null)
  
  useEffect(() => {
  if (gallery) {
    const { first, second, third } = gallery;
    setFirstImg(first)
    setSecondImg(second)
    setThirdImg(third)
  }
  }, [gallery])
  return (
    <div className="product-gallery">
      <div className="product-gallery-sml-img-1">
        <picture>
          <source srcSet={galleryImgOneDesk} media="(min-width: 59.37em)" />
          <source srcSet={galleryImgOneTab} media="(min-width: 43.75em)" />
          <img
            className="product-gallery-sml-img"
            src={galleryImgOneMob}
            alt="gallery-sml-img-1"
          />
        </picture>
      </div>

      <div className="product-gallery-sml-img-2">
        <picture>
        <source srcSet={galleryImgTwoDesk} media="(min-width: 59.37em)" />
        <source srcSet={galleryImgTwoTab} media="(min-width: 43.75em)" />
        <img
          className="product-gallery-sml-img"
          srcSet={galleryImgTwoMob}
          alt="gallery-sml-img-2"
          />
          </picture>
      </div>
      <div className="product-gallery-lrg-img">
        <picture>
          <source srcSet={galleryImgThreeDesk} media="(min-width: 59.37em)" />
          <source srcSet={galleryImgThreeTab} media="(min-width: 43.75em)" />
          <img
            className="product-gallery-lrg-img__image"
            srcSet={galleryImgThreeMob}
            alt="gallery-lrg-img"
          />
        </picture>
      </div>
    </div>
  );
}

export default ProductGallery