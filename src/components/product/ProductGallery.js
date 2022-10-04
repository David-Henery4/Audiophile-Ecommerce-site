import React from 'react'
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
          <source
            srcSet={firstImg && require(`../../assets/${firstImg.desktop}`)}
            media="(min-width: 59.37em)"
          />
          <source
            srcSet={firstImg && require(`../../assets/${firstImg.tablet}`)}
            media="(min-width: 43.75em)"
          />
          <img
            className="product-gallery-sml-img"
            src={firstImg && require(`../../assets/${firstImg.mobile}`)}
            srcSet={firstImg && require(`../../assets/${firstImg.mobile}`)}
            alt="gallery-sml-img-1"
          />
        </picture>
      </div>

      <div className="product-gallery-sml-img-2">
        <picture>
          <source
            srcSet={secondImg && require(`../../assets/${secondImg.desktop}`)}
            media="(min-width: 59.37em)"
          />
          <source
            srcSet={secondImg && require(`../../assets/${secondImg.tablet}`)}
            media="(min-width: 43.75em)"
          />
          <img
            className="product-gallery-sml-img"
            src={secondImg && require(`../../assets/${secondImg.mobile}`)}
            srcSet={secondImg && require(`../../assets/${secondImg.mobile}`)}
            alt="gallery-sml-img-2"
          />
        </picture>
      </div>
      <div className="product-gallery-lrg-img">
        <picture>
          <source
            srcSet={thirdImg && require(`../../assets/${thirdImg.desktop}`)}
            media="(min-width: 59.37em)"
          />
          <source
            srcSet={thirdImg && require(`../../assets/${thirdImg.tablet}`)}
            media="(min-width: 43.75em)"
          />
          <img
            className="product-gallery-lrg-img__image"
            src={thirdImg && require(`../../assets/${thirdImg.mobile}`)}
            srcSet={thirdImg && require(`../../assets/${thirdImg.mobile}`)}
            alt="gallery-lrg-img"
          />
        </picture>
      </div>
    </div>
  );
}

export default ProductGallery