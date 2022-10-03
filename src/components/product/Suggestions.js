import React from 'react'
import { Link } from 'react-router-dom';

const Suggestions = ({others}) => {
  
  return (
    <div className="suggestions">
      <h3 className="suggestions__section-heading">YOU MAY ALSO LIKE</h3>
      <div className="suggestions-products">
        {others && others.map((item,i) => {
          const {slug, name, image} = item
          const {mobile, tablet, desktop} = image
          return (
            <div key={i} className="suggestions-item">
              <picture className="suggestions-picture">
                <source
                  srcSet={require(`../../assets/${desktop}`)}
                  media="(min-width: 59.37em)"
                />
                <source
                  srcSet={require(`../../assets/${tablet}`)}
                  media="(min-width: 43.75em)"
                />
                <img
                  className="suggestions-item__image"
                  srcSet={require(`../../assets/${mobile}`)}
                  alt={`suggested-item-${i + 1}`}
                />
              </picture>
              <h5 className="suggestions-item__title">{name.toUpperCase()}</h5>
              <Link to={`/product/${slug}`}>
                <button className="btn-basic-1">SEE PRODUCT</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Suggestions