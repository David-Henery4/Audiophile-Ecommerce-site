import React from 'react'
import {xx59MobSuggestion, xx99MK1MobSuggestion, zx9MobSuggestion} from "../../assets/shared/mobile";
import {xx59TabSuggestion, xx99MK1TabSuggestion, xz9TabSuggestion} from "../../assets/shared/tablet";
import {xx59DeskSuggestion,xx99MK1DeskSuggestion,xz9DeskSuggestion} from "../../assets/shared/desktop";

// import {} from "../../assets/shared/desktop";
const Suggestions = () => {
  return (
    <div className="suggestions">
      <h3 className="suggestions__section-heading">YOU MAY ALSO LIKE</h3>
      <div className="suggestions-products">
        <div className="suggestions-item">
          <picture>
            <source srcSet={xx99MK1DeskSuggestion} media="(59.37em)" />
            <source srcSet={xx99MK1TabSuggestion} media="(43.75em)" />
          <img
            className="suggestions-item__image"
            srcSet={xx99MK1MobSuggestion}
            alt="suggested-item-1"
          />
          </picture>
          <h5 className="suggestions-item__title">XX99 MARK I</h5>
          <button className="btn-basic-1">SEE PRODUCT</button>
        </div>
        <div className="suggestions-item">
          <picture>
            <source srcSet={xx59DeskSuggestion} media="(59.37em)" />
            <source srcSet={xx59TabSuggestion} media="(43.75em)" />
          <img
            className="suggestions-item__image"
            srcSet={xx59MobSuggestion}
            alt="suggested-item-2"
          />
          </picture>
          <h5 className="suggestions-item__title">XX59</h5>
          <button className="btn-basic-1">SEE PRODUCT</button>
        </div>
        <div className="suggestions-item">
          <picture>
            <source srcSet={xz9DeskSuggestion} media="(59.37em)" />
            <source srcSet={xz9TabSuggestion} media="(43.75em)" />
          <img
            className="suggestions-item__image"
            srcSet={zx9MobSuggestion}
            alt="suggested-item-3"
          />
          </picture>
          <h5 className="suggestions-item__title">ZX9 SPEAKER</h5>
          <button className="btn-basic-1">SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions