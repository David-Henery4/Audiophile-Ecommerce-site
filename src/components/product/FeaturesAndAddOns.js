import React from "react";

const FeaturesAndAddOns = ({ features, includes }) => {
  return (
    <div className="feats-add-ons">
      <div className="features">
        <h3 className="features__title">FEATURES</h3>
        <article className="features-desc body-text">
          <p className="features-desc__para">
            {features}
          </p>
        </article>
      </div>
      <div className="add-ons">
        <h3 className="add-ons__title">IN THE BOX</h3>
        <ul className="add-ons-list body-text">
          {includes && includes.map((inc, i) => {
            const {quantity,item} = inc
            return (
              <li key={i} className="add-ons-list__item">
                <p>
                  <span> {quantity} </span> {item}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesAndAddOns;
